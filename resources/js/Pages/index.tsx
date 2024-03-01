import { Head, Link } from "@inertiajs/react";
import Layout from "@/Layout/layout.js";
import React from "react";

export default function index() {
  const onClick = () => {
    console.log("hello");
  };

  return (
    <Layout>
      <Head title="Home" />
      <h1>Home</h1>
      <Link href={"/about"}>Click Me</Link>
    </Layout>
  );
}
