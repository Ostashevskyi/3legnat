import LoginForm from "@/components/Forms/LoginForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <section className="p-mobile my-10 flex-1 lg:max-w-[426px] justify-center ">
      <h4 className="text-neutral_07 mb-6">Sign In</h4>
      <p className="regular-body-2 text-neutral_04 mb-8">
        Don't have account yet?{" "}
        <Link
          className="semibold-body-2 text-secondary_green"
          href={"/register"}
        >
          Sign Up
        </Link>
      </p>
      <LoginForm />
    </section>
  );
};

export default Login;
