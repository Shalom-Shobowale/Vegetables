export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center">
        Welcome to{" "}
        <span className=" font-Cursive text-background">Vegetables</span>
      </h1>
      <p className="text-center mt-3 mb-7 text-sm">
        Type your e-mail or phone number to log in or create a Jumia
        <br /> account.
      </p>
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter email or Phone-Number"
        required
        className="w-96 border border-black px-4 py-3 focus:outline-background rounded-md"
      />
      <div className="my-8">
        <button className="bg-background text-foreground font-semibold w-96 py-3 rounded-md">
          Continue
        </button>
        <div className="text-center">
          <sub>
            By continuing you agree to Vege's <br />
            <span className="text-background underline cursor-pointer">
              Terms and Condition
            </span>
          </sub>
        </div>
      </div>
      <button className="bg-background text-foreground font-semibold w-96 py-3 rounded-md">
        Log in with Facebook
      </button>
      <div className="text-center my-8">
        <sub>
          For further support, you may visit the Help Center or contact our{" "}
          <br /> customer service team.
        </sub>
      </div>
      <h1 className=" font-Cursive text-background text-3xl font-bold">
        Vegetables
      </h1>
    </div>
  );
}
