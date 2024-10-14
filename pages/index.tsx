import Head from "next/head";
import Footer from "../components/Footer.js";
import Image from "next/image.js";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Arav Dave</title>
        <meta name="description" content="Arav Dave's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/sunset.jpeg" />
      </Head>
      <div className="mx-20 lg:mx-40 text-white flex-col flex-grow mb-12 justify-center">
        <main className="flex flex-col mt-8 justify-center space-y-5">
          <div className="flex-nowrap rounded-lg space-x-9">
            <Image
              className="ml-4 mb-4 mt-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-120  duration-100 ring-8 ring-green-300 self-start rounded-full float-left mr-8"
              width="175"
              height="175"
              alt="Profile Picture"
              src="/images/profile_image.jpg"
            />
            <div className="flex-col">
              <div className="flex flex-row flex-wrap justify-between">
                <div className="block mt-0 font-sans text-5xl font-semibold text-white underline underline-offset-8 decoration-green-300">Arav Dave</div>
                <div className="flex flex-row justify-center items-center">
                  <a aria-label="Email" target="_blank" rel="noreferrer" href="mailto:aravdave@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ease-in-out delay-0 duration-75 hover:scale-125">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                  <a aria-label="LinkedIn Link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aravdave/">
                    <svg className="self-center ease-in-out delay-0 duration-75 hover:scale-125 fill-black ml-4 mt-4" height="50" width="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g fill="white" fill-rule="evenodd">
                        <path
                          d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                          fill="#007EBB"
                        />
                        <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" />
                      </g>
                    </svg>
                  </a>
                  <a aria-label="Devpost Link " target="_blank" rel="noreferrer" href="https://devpost.com/aravdave">
                    <svg width="44px" height="29px" viewBox="0 0 44 29" className="ease-in-out delay-0 duration-75 hover:scale-125 fill-white mr-3" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>devpost-logo</title>
                      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="layout/site-header-mobile-minilogo" transform="translate(-54.000000, -14.000000)" fill-rule="nonzero">
                          <g id="devpost-logo" transform="translate(54.000000, 14.000000)">
                            <polygon id="Shape" fill="#57C1FF" points="35.936 1.47437618e-13 29.552 1.47437618e-13 37.616 13.996817 29.552 28.0176835 35.936 28.0176835 44 13.996817"></polygon>
                            <polygon id="Shape" fill="#57C1FF" points="8.064 0 14.448 0 6.384 13.996817 14.448 28.0176835 8.064 28.0176835 0 13.996817"></polygon>
                            <polygon id="Shape" fill="#003E54" points="12.048 28.0176835 3.984 13.996817 12.048 0 31.952 0 40.016 13.996817 31.952 28.0176835"></polygon>
                            <g id="Group" transform="translate(15.120000, 5.050398)" fill="#FFFFFF">
                              <path
                                d="M5.088,17.4599469 L0,17.4599469 L0,0.45694076 L5.304,0.45694076 C10.152,0.45694076 13.752,2.74164456 13.752,8.97046861 C13.752,14.934748 9.432,17.4599469 5.088,17.4599469 Z M5.208,3.75172414 L3.408,3.75172414 L3.408,14.1411141 L5.088,14.1411141 C8.64,14.1411141 10.272,12.0488064 10.272,8.9464191 C10.272,5.48328912 8.784,3.75172414 5.208,3.75172414 Z"
                                id="Shape"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a aria-label="Github Link" target="_blank" rel="noreferrer" href="https://github.com/aravdave">
                    <svg viewBox="0 0 100 100" className="ease-in-out delay-0 duration-75 hover:scale-125 fill-white" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="font-mono text-xl font-medium mt-1">
                <p>
                  Hi! I&apos;m a CS and Applied Math double major graduating this December from the <a className="underline underline-offset-2 decoration-red-400">University of Maryland, College Park</a>. This past summer, I was a software engineer intern
                  at Appian working on a Spring Boot w/ Hibernate Java web app. During the Summer of 2023, I was a data engineer intern at <a className="underline underline-offset-2 decoration-blue-500">Paramount Streaming</a> in NYC where I built a data
                  monitoring tool with machine learning. During the Summer &rarr; Winter of 2022-2023, I was a software developer intern at <a className="underline underline-offset-2 decoration-violet-400">Leidos</a>.
                </p>{" "}
                <br></br>
                <p>
                  I&apos;m interested in <a className="underline underline-offset-2 decoration-amber-300">backend and full-stack software development</a> <span> </span> and have working proficiency in{" "}
                  <a className="underline underline-offset-2 decoration-cyan-300">Apache Spark, GCP, Spring, Hibernate, React.js, Django, Grails, PostgreSQL, Flask, Pandas, Docker, and Git</a>. I&apos;m always eager to learn something new and look forward
                  to new opportunities. In my free time, you will find me out on long runs, vibing to indie rock music, or exploring DC with friends. Feel free to reach out!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pt-6 text-center text-3xl font-semibold text-white underline underline-offset-4 decoration-sky-400">Notable Projects</div>
          <div className="mb-8 pt-8 space-x-16 grid grid-flow-col justify-center items-center justify-items-center">
            <div className="drop-shadow-2xl rounded-md flex flex-col items-center bg-amber-100">
              <a target="_blank" rel="noreferrer" href="https://meal-with-me.vercel.app/">
                <Image className="rounded-t-md" src="/images/MealWithMe.png" quality="90" width="225" height="100" alt="MealWithMe screenshot" />
              </a>
              <a className="hover:underline underline-offset-4 hover:decoration-sky-600 mt-4 text-2xl font-sans font-semibold text-black" rel="noreferrer" target="_blank" href="https://meal-with-me.vercel.app/ ">
                MealWithMe
              </a>
              <p className="text-sm text-gray-500 mt-1">(Work in progress)</p>
              <div className="flex flex-row items-center space-x-8 mt-2 mb-4 mr-3 ml-3">
                <a aria-label="Github Link" className="self-center justify-center items-center mr-3" target="_blank" rel="noreferrer" href="https://github.com/aravdave/MealWithMe">
                  <svg viewBox="0 0 100 100" className="ease-in-out delay-0 duration-75 hover:scale-125 fill-black" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="drop-shadow-2xl rounded-md flex flex-col items-center bg-amber-100">
              <a target="_blank" rel="noreferrer" href="https://pcbitcamp22.github.io/codle/">
                <Image className="rounded-t-md" src="/images/codle.jpg" quality="90" width="300" height="200" alt="Codle screenshot" />
              </a>
              <a className="hover:underline underline-offset-4 hover:decoration-sky-600 mt-4 text-2xl font-sans font-semibold text-black" rel="noreferrer" target="_blank" href="https://devpost.com/software/codle-tbkglw">
                Codle
              </a>
              <div className="flex flex-row items-center space-x-8 mt-2 mb-4 mr-3 ml-3">
                <a aria-label="Devpost Link" target="_blank" rel="noreferrer" href="https://devpost.com/software/codle-tbkglw">
                  <Image className="ease-in-out duration-75 hover:scale-125" src="/images/devpost-logo.svg" width={100} height={30} alt="Devpost logo" />
                </a>
                <a aria-label="Github Link" className="self-center justify-center items-center mr-3" target="_blank" rel="noreferrer" href="https://github.com/PCbitcamp22">
                  <svg viewBox="0 0 100 100" className="ease-in-out delay-0 duration-75 hover:scale-125 fill-black" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="drop-shadow-2xl rounded-md flex flex-col items-center bg-amber-100">
              <a target="_blank" rel="noreferrer" href="https://pa.junion44.rocks/">
                <Image className="rounded-t-md" src="/images/photo-assassin.png" quality="90" width={249} height={166} alt="Photo Assassin screenshot" />
              </a>
              <a className="hover:underline underline-offset-4 hover:decoration-sky-600 mt-4 text-2xl font-sans font-semibold text-black" rel="noreferrer" target="_blank" href="https://devpost.com/software/photo-assassin">
                Photo Assassin
              </a>
              <div className="flex flex-row items-center space-x-8 mt-2 mb-4 mr-3 ml-3">
                <a aria-label="Devpost Link" target="_blank" rel="noreferrer" href="https://devpost.com/software/photo-assassin">
                  <Image className="ease-in-out duration-75 hover:scale-125" src="/images/devpost-logo.svg" width={100} height={30} alt="Devpost logo" />
                </a>
                <a aria-label="Github Link" className="self-center justify-center items-center mr-3" target="_blank" rel="noreferrer" href="https://github.com/orgs/AAAP-Bitcamp/repositories">
                  <svg viewBox="0 0 100 100" className="ease-in-out delay-0 duration-75 hover:scale-125 fill-black" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
