"use server";
import { createClient } from "@/lib/supabase/supabaseServer";
import { loginValidator, registerValidator } from "@/validations/authSchema";
import vine, { errors } from "@vinejs/vine";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function registerAction(prevstate: any, formdata: FormData) {
  //@ts-ignore
  const supabase = createClient(cookies());
  try {
    const data = {
      name: formdata.get("name"),
      username: formdata.get("username"),
      email: formdata.get("email"),
      password: formdata.get("password"),
      password_confirmation: formdata.get("password_confirmation"),
    };
    const payload = await registerValidator.validate(data);
    console.log("The form data is", payload);
    const { data: userData, error } = await supabase
      .from("users")
      .select("id")
      .eq("username", payload.username);

    if (userData && userData?.length > 0) {
      return {
        status: 400,
        errors: {
          username: "username already exists! Please try another username",
        },
      };
    }
    const { error: singnupErr } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
      options: {
        data: {
          name: payload.name,
          username: payload.username,
        },
      },
    });

    if (singnupErr) {
      return { status: 400, errors: { email: singnupErr.message } };
    }

    await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return { status: 400, errors: error.messages };
    }
  }
  return redirect("/");
}

export async function loginAction(prevstate : any , formdata : FormData){
    //@ts-ignore
    const supabase = createClient(cookies());
    try{
        const data ={
            email:formdata.get("email"),
            password : formdata.get("password")
        }
        const payload = await loginValidator.validate(data);
        const {error} = await supabase.auth.signInWithPassword({
            email : payload.email,
            password: payload.password
        })
        if(error){
            return {
                status: 400,
                errors:{
                    email:error.message
                }
            }
        }
    }
    catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
          return { status: 400, errors: error.messages };
        }
      }

      redirect("/");
}
