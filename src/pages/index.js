// const inter = Inter({ subsets: ["latin"] });

// import components

import About from "../components/About";

import MyProjects from "../components/MyProjects";

// import Fade from "../components/Fade";

export default function Home() {
  return (
    <>
      <div className="mt-24 ">
        <About />
        <MyProjects />
      </div>
    </>
  );
}
