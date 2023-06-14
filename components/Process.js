import Image from "next/image"
import Timeline from "../components/Timeline"
import ResearchIcon from "../images/Diagrams/Design-Process/research.png"
import DesignIcon from "../images/Diagrams/Design-Process/design.png"
import BuildIcon from "../images/Diagrams/Design-Process/build.png"
import ContentIcon from "../images/Diagrams/Design-Process/content.png"
import TestIcon from "../images/Diagrams/Design-Process/test.png"
import LaunchIcon from "../images/Diagrams/Design-Process/launch.png"

export default function Process() {
    return (
        <section className="design-process">
            
            <div className="h2-design-process">
                <h2>Web Design Process</h2>
            </div>

            <div className="diagram-and-timeline">
                
                <div className="process-left">
                    <div className="diagram-design-process">

                        <div className="diagram-embedded-circle">
                            <p>Web Design Process</p>
                        </div>

                        <div className="diagram-design-process-steps">
                            <div className="design-step step-1">
                                <Image src={ResearchIcon}/>
                                <h4>Research</h4>
                            </div>
                            <div className="design-step step-2">
                                <Image src={DesignIcon}/>
                                <h4>Design</h4>
                            </div>
                            
                            <div className="design-step step-3">
                                <Image src={BuildIcon}/>
                                <h4>Build</h4>
                            </div>
                            
                            <div className="design-step step-4">
                                <Image src={ContentIcon}/>
                                <h4>Content</h4>
                            </div>
                            
                            <div className="design-step step-5">
                                <Image src={TestIcon}/>
                                <h4>Test</h4>
                            </div>
                            
                            <div className="design-step step-6">
                                <Image src={LaunchIcon}/>
                                <h4>Launch</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="process-right">
                    <Timeline />
                </div>

            </div>

        </section>
    )
}