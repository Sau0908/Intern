import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";
import logo7 from "../images/logo7.png";
import logo9 from "../images/logo9.png";
import { useEffect } from "react";

export default function Landing() {
  const history = useNavigate();

  useEffect(() => {
    return () => {
      localStorage.getItem("user_login") ? "" : history("/login");
    };
  }, []);

  function handleLogin() {
    history("/login");
  }

  return (
    <div className="grid gap-20">
      {/* navbar starts */}
      <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center">
            <img
              src="data:image/jpeg;base64,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"
              class="h-8 mr-3"
              alt=""
            />
          </a>
          <div class="flex md:order-2">
            <button
              onClick={handleLogin}
              type="button"
              class="text-white bg-black hover:bg-[#7ED957] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Log In
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white   ">
              <li>
                <button
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700  rounded md:bg-transparent md:text-[#7ED957] md:p-0 "
                  aria-current="page"
                >
                  <img
                    src="https://img.icons8.com/?size=512&id=43699&format=png"
                    class="flex h-6"
                    alt="Home"
                  />
                </button>
              </li>
              <li>
                <button
                  href="#"
                  class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
                >
                  Learn
                </button>
              </li>
              <li>
                <button
                  href="#"
                  class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
                >
                  E-Resources
                </button>
              </li>
              <li>
                <button
                  href="#"
                  class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
                >
                  Find Jobs
                </button>
              </li>
              <li>
                <button
                  href="#"
                  class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
                >
                  Compete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* //Hero Section Starts */}
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div class="jusify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 class="text-4xl text-gray-700 font-bold md:text-5xl">
                Get world class courses from world class mentors
              </h1>
              <p class="text-lg">
                Get quality courses with us with the best price. Now you can get
                the best course from us. We have top mentors around the globe
              </p>
              <div class="flex flex-row-reverse flex-wrap justify-center gap-10 md:gap-6 md:justify-end">
                <button
                  type="button"
                  title=""
                  class="w-full py-3 px-6 text-center rounded-xl transition bg-black shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                >
                  <span class="block text-white font-semibold">
                    Get Started
                  </span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-5 grid-rows-4 gap-4 py-7 md:w-5/12 lg:w-6/12">
              <div class="col-span-2 row-span-4">
                <img
                  src="https://img.freepik.com/premium-photo/3d-cartoon-character-fun-teenager_183364-107392.jpg?size=626&ext=jpg&ga=GA1.2.695701732.1683486515&semt=ais"
                  class="w-full h-full object-cover object-top rounded-xl py-12 "
                  width="640"
                  height="960"
                  alt="s"
                  loading="lazy"
                />
              </div>
              <div class="col-span-2 row-span-2 ">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-people-working-marketing_23-2150417382.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
                  class="w-full h-full object-cover object-top rounded-xl hover:transform hover:-rotate-3 hover:scale-105 transition duration-300"
                  width="640"
                  height="640"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div class="col-span-3 row-span-3">
                <img
                  src="https://img.freepik.com/free-psd/business-man-illustration_1150-58988.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
                  class="w-full h-full object-cover object-top rounded-xl hover:transform hover:-rotate-3 hover:scale-105 transition duration-300"
                  width="640"
                  height="427"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Trusted by companies --> */}
      <div className="">
        <h1 class="font-serif text-xl font-extrabold leading-10 tracking-tight text-left text-black text-center  sm:leading-none md:text-xl text-xl lg:text-5xl">
          <span class="bg-clip-text text-transparent  bg-gradient-to-b from-gray-900 to-gray-600 ">
            Valuable Partnerships
          </span>
        </h1>
        <div className="app">
          <div className="logo-grid">
            <Logo image={logo1} speed={5} />
            <Logo image={logo3} speed={5} />
            <Logo image={logo4} speed={5} />
            <Logo image={logo9} speed={5} />
            <Logo image={logo7} speed={5} />
            <Logo image={logo2} speed={5} />
            <Logo image={logo5} speed={5} />
            <Logo image={logo1} speed={5} />
            {/* Add more Logo components with different images and speeds */}
          </div>
        </div>
      </div>

      {/* <-- Cards Section-1 --> */}
      <div>
        <div class="container mx-auto">
          <div class="flex justify-center gap-8">
            <div class="bg-[#E0EEFE] shadow-md rounded-lg p-4 hover:transform hover:-rotate-3 hover:scale-105 transition duration-300 relative">
              <img
                src="https://cdn.unstop.com/uploads/images/home/learn-vector-image.png?d=760x404"
                alt=""
              />
              <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 font-serif absolute bottom-0 left-0 right-0 text-center text-2xl font-extrabold mb-4">
                Learn
              </h1>
            </div>
            <div class="bg-[#ECE9FF] shadow-md rounded-lg p-4 hover:transform hover:-rotate-3 hover:scale-105 transition duration-300 relative">
              <img
                src="https://cdn.unstop.com/uploads/images/home/practice-vector-image.png?d=760x404"
                alt=""
              />
              <h1 class="bg-clip-text text-transparent bg-gradient-to-tr from-violet-600 to-orange-300 font-serif absolute bottom-0 left-0 right-0 text-center text-2xl font-extrabold mb-4">
                Practice
              </h1>
            </div>
            <div class="bg-[#FFF3D8] shadow-md rounded-lg p-4 hover:transform hover:-rotate-3 hover:scale-105 transition duration-300 relative">
              <img
                src="https://cdn.unstop.com/uploads/images/home/mentorships-vector-image.png?d=760x404"
                alt=""
              />
              <h1 class="text-orange-500 font-serif absolute bottom-0 left-0 right-0 text-center text-2xl font-extrabold mb-4">
                Find Jobs
              </h1>
            </div>
          </div>
        </div>

        {/* <-- Cards Section-2 --> */}

        {/* <-- Cards Section-3 --> */}

        <div class="container mx-auto py-7">
          <h1 class="font-mono italic text-xl font-extrabold leading-10 tracking-tight text-left text-black text-center  sm:leading-none md:text-xl text-xl lg:text-5xl">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              Get Hired
            </span>
          </h1>
          <div class="flex justify-center gap-8 py-7">
            <div class="bg-white shadow-md rounded-lg p-2 md:p-4 hover:transform hover:-rotate-3 hover:scale-105 transition duration-300 relative w-[40%] h-[50%]">
              <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 font-serif text-center text-xl font-bold">
                Part-Time Internships
              </h1>
              <img
                src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg&ga=GA1.2.695701732.1683486515&semt=ais"
                alt=""
              />
            </div>
            <div class="bg-white shadow-md rounded-lg p-2 md:p-4 hover:transform hover:-rotate-3 hover:scale-105 transition duration-300 relative w-[40%] h-[50%]">
              <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 font-serif text-center text-xl font-bold">
                Full-Time Jobs
              </h1>
              <img
                src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=sph"
                alt=""
              />
            </div>
            <div class="bg-white shadow-md rounded-lg p-2 md:p-4 hover:transform hover:-rotate-3 hover:scale-105 transition duration-300 relative w-[35%] h-[50%]">
              <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 font-serif  text-center text-xl font-bold">
                Paid Internships
              </h1>
              <img
                src="https://img.freepik.com/free-vector/male-team-illustration_23-2150184954.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Newsletter--> */}
      <div class="xl:flex xl:justify-end pt-16">
        <div class="container sm:mx-auto">
          <div class="block xl:flex justify-between xl:items-center lg:items-center md:flex">
            <div class="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
              <h1 class="text-gray-800   text-3xl font-extrabold mb-3 mt-12 xl:mt-0">
                Don't miss any updates
              </h1>
              <p class="text-lg text-gray-600  mb-6">
                We will write rarely and only high-quality content.
              </p>
              <div class="flex w-full flex-wrap">
                <div class="w-full">
                  <div class="flex flex-col mb-3">
                    <label
                      class="text-base font-bold text-gray-800   mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="johnstark97@gmail.com"
                      class="focus:outline-none  focus:border-indigo-700 border-gray-300 border rounded-sm py-2 outline-none pl-2 pr-2"
                    />
                  </div>
                  <button
                    type="submit"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-indigo-600 text-white text-base w-full py-3 px-6 rounded"
                  >
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </div>
            <div class="w-11/12 xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-end md:w-5/12 bg-indigo-100  relative py-20">
              <div class="h-4/5 w-4/5">
                <img
                  src="https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?w=1800&t=st=1687869732~exp=1687870332~hmac=44995406fbc3727eadac028413793b15e4910f42ad45d416401e95df611429b7"
                  alt="A man jumping infront of a graffiti"
                  role="img"
                  class="h-full w-full overflow-hidden object-cover relative z-10 xl:-ml-56 lg:-ml-32 sm:-ml-20 -ml-12 md:-ml-20 rounded"
                />
              </div>
              <div class="absolute bottom-0 right-0 pb-2 pr-2 z-0">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/input_field_with_image-svg1.svg"
                  alt="pattern"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer--> */}
      <div>
        <section class="bg-black">
          <div class="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
            <h1 class="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl">
              <span class="inline md:block">Join Us</span>
              <span class=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
                {" "}
                In your
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                  {" "}
                  Journey
                </span>{" "}
              </span>
            </h1>
            <div class="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
              <button class="bg-tkb border text-sm text-white py-3 px-7 rounded-full">
                About Us
              </button>
            </div>
          </div>
        </section>

        <hr class="text-white mx-5" />
        <footer class="bg-black pb-5">
          <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <div class="flex justify-center text-teal-300 sm:justify-start">
                <img
                  class="rounded-full"
                  src="https://sahilnetic.xyz/evilcat.png"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <p>
                <div className="flex justify-center px-4 space-x-7 align-center">
                  <h4>------------------------------</h4>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </p>

              <p class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                T&C &nbsp; Careers &nbsp; Privacy & Policy &nbsp; Developers
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
