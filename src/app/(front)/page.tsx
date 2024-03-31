import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/supabaseServer";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Home() {
  //@ts-ignore
  const supabase = createClient(cookies());

  const {data , error} = await supabase.auth.getSession();
  return (
   <div>
    
   </div>
  );
}
