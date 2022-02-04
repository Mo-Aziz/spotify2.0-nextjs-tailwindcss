import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
      <img
        className="w-52 mb-5"
        src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-transparent-spotify-logo-images-25.png"
        alt="spotify logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

// _middleware.js;
// import { getToek, getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middlewar(req) {
//   // Token will exist if user is loggin in
//   const token = await getToken({ req, secret: process.env, JWT_SECERT });

//   const { pathname } = req.nextUrl;

//   //Allow the request if the following is true...
//   // 1- it is a request for next-auth  session & provider to fetch the existed tokens.

//   if (pathname.includes("/api/auth") || token) {
//     return NextResponse.next();
//   }
//   // redirect them login if they do not have token AND are requesting a protected route
//   if (!token && pathname !== "/login") {
//     return NextResponse.redirect("/login");
//   }
// }
