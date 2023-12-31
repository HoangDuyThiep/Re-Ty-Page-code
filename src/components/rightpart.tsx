import About from "./content/about";
import Contact from "./content/contact";
import HomeCV from "./content/homecv";
import Project from "./content/project";
import Skills from "./content/skills";
import { IProps } from "./leftpart";


const RightPart = (props: IProps) => {
    return (
        <>
            <div className={props.showLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
                <div className="rightpart_inner">
                    <HomeCV />

                    {/* <!-- ABOUT --> */}
                    <About />
                    {/* <!-- /ABOUT --> */}

                    {/* <!-- SKILLS --> */}
                    <Skills />
                    {/* <!-- /SKILLS --> */}

                    {/* <!-- SERVICES --> */}
                    <Project />
                    {/* <!-- /SERVICES --> */}


                    {/* <!-- CONTACT & FOOTER --> */}
                    <Contact />
                    {/* <!-- /CONTACT & FOOTER --> */}

                </div>
            </div>
        </>
    )
}

export default RightPart;