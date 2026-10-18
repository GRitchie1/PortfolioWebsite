//YouTube Embedd
import ReactPlayer from "react-player";

//RFID Robotic Arm
import img1 from './Images/RFIDRoboticArm/main.jpg';
import schematic1 from './Images/RFIDRoboticArm/schematic.jpg';
import model1 from './Images/RFIDRoboticArm/model.jpg';

//Balena To Do List
import img3 from './Images/BalenaToDoList/main.jpg';

//Motorbike
import bike1 from './Images/Motorbike/main.jpg'
import before from './Images/Motorbike/before.jpg'
import during from './Images/Motorbike/during.jpg'
import after from './Images/Motorbike/after.jpg'

//Laser engraver 
import laser1 from './Images/LaserEngraver/Laser Engraver.jpg'
import laser2 from './Images/LaserEngraver/Coasters.jpg'
import laser3 from './Images/LaserEngraver/main.jpg'

//Plasma cutter
import plasmaCutter from './Images/PlasmaCutter/Plasma cutter.jpg'

//Bicycle
import bicycleFinished from './Images/Bicycle/Bicycle Finished.jpg'
import bicycleBefore from './Images/Bicycle/Bicycle before.jpg'
import bicycleWelding from './Images/Bicycle/Welding.jpg'

//Homelab
import homelab from './Images/Homelab/Homelab.jpg'

//Macro Pad
import macro1 from './Images/MacroPad/main.jpg'

//On air
import onAir1 from './Images/OnAir/main.jpg'
import onAir2 from './Images/OnAir/internals.jpg'
import onAir3 from './Images/OnAir/web.jpg'


var projectslist = [
    {title:"RFID Robotic Arm", 
        overview: <p>A robotic arm that recognizes and sorts items, built as my HND graded-unit project. Awarded an A grade.</p>,
        content:<div>
                    <h4>This project was awarded an A grade.</h4>
                    <p>I built this robotic arm for my HND Mechatronics graded unit. It picks up items, reads their RFID tags, and sorts them into one of three destinations.</p>
                    <p>The prototype combines mechanical design, electronics, 3D modelling, 3D printing, and microcontroller programming. I designed the parts in FreeCAD and printed them on an Ender 3V2.</p>
                    <h3>See it in action</h3>
                    <ReactPlayer url="https://www.youtube.com/watch?v=GsCnQiO8YXE" className="youtubePlayer"/>
                    <h3>Project brief</h3>
                    <p>The system was designed to sort 3D-printed items arriving on a conveyor. Each item needed to be identified and placed in the correct output location.</p>
                    <ul>
                        <li>Pick up, move, identify, and sort each item.</li>
                        <li>Sort items into three destinations, including a destination for unknown or untagged items.</li>
                        <li>Work with a conveyor running at 2 m/min, with items spaced 300 mm apart (a target of 6.66 items per minute).</li>
                        <li>Be suitable for a 400 mm-wide conveyor in the final design; the prototype had no size limit.</li>
                        <li>Include an emergency stop and barriers around the robot's working area.</li>
                    </ul>
                    <h3>Research and design</h3>
                    <p>I compared motor and controller options before choosing micro servos and a Raspberry Pi Pico. The Pico runs CircuitPython, which provided a straightforward way to control the motors and connect the project hardware.</p>
                    <p>The arm uses an RC522 reader to identify each item's RFID tag. I designed the circuitry through several iterations in Fritzing and combined custom 3D-printed parts with existing models. FDM printing made it quick to test and refine the designs.</p>
                    <img style={{maxWidth:"100%"}} src={schematic1} alt="Circuit schematic for the RFID robotic arm"></img>
                    <p>I also designed a stable base to support the arm as it rotates.</p>
                    <img style={{maxWidth:"100%"}} src={model1} alt="3D model of the robotic arm base"></img>
                    <h3>Build and integration</h3>
                    <p>Several printed parts needed redesigning after breakages. During testing, the five servos jittered when driven together by the Pico. I added a PCA9685 servo driver, connected over I2C, to control them reliably.</p>
                    <p>Once the arm moved accurately, I connected the RFID reader over SPI and programmed the three sorting destinations. I then added the emergency stop and barriers to mark the robot's working area.</p>
                    <h3>Testing and results</h3>
                    <p>I tested each subsystem before testing the complete system. The arm could pick up and move items, read their tags, and sort known, unknown, and untagged items into the correct destinations. The emergency stop also halted the system as intended.</p>
                    <p>The main target not met was speed: sorting one item took 20-30 seconds, compared with the nine-second cycle required by the brief. The small motors could not move the arm quickly without losing accuracy.</p>
                    <h3>Outcome and next steps</h3>
                    <p>The prototype demonstrated the full pick, identify, and sort process, and its base provided a stable platform for the arm. The project received an A grade.</p>
                    <p>Future improvements could include stronger motors, refinements to the arm and control code, additional sensors, and further safety measures. These changes would need to be balanced against the project budget.</p>
                    <p>Build instructions and project files are available in the GitHub repository.</p>
                </div>,
        img:img1, 
        url:"https://github.com/GRitchie1/RFIDRoboticArm-HNDGradedUnit" 
    },
    {title:"Balena To Do List", 
        overview:<p>A simple touchscreen task manager built to make everyday planning easier.</p>, 
        content:<div>
                    <h3>Overview</h3>
                    <p>I built a desktop to-do list to explore Flask and create a tool for managing my own tasks.</p>
                    <h3>How it works</h3>
                    <p>The app runs on a Raspberry Pi 4 managed with Balena and uses the official Pi touchscreen as its display and input.</p>
                    <p>Tasks can include smaller steps and due dates. A random-task selector helps choose what to work on next.</p>
                </div>,
        img:img3, 
        url:"https://github.com/GRitchie1/Balena_ToDoList" 
    },
    {title:"Laser Engraver - Rebuild and Upgrade", 
    overview:<p>A restoration and upgrade project focused on making a donated laser engraver reliable, safer, and easier to use.</p>, 
    content:<div>
                <h3>Restoring the engraver</h3>
                <h4>Before the rebuild</h4>
                <img style={{maxWidth:"100%"}} src={laser3} alt="Laser engraver before the rebuild"></img>
                <p>A friend gave me a laser engraver that was not working. I replaced its damaged microcontroller and installed GRBL, but the motors still would not move.</p>
                <p>I traced the first problem to incorrectly wired stepper motors, then found that the stepper driver board was also damaged. Rewiring the motors and replacing the driver restored movement on both axes.</p>
                <h3>Testing and upgrades</h3>
                <p>I configured LightBurn to prepare jobs for the engraver and ran initial tests. After adjusting the laser focus, I was able to produce clean engravings.</p>
                <p>I added limit switches and updated GRBL so the engraver can home itself before each job, giving it a consistent starting position.</p>
                <p>I replaced the original gantry arrangement with a linear rail to reduce wobble and improve engraving accuracy, especially on straight lines and fine details.</p>
                <p>The laser module has also been upgraded, expanding the range of cutting and engraving work the machine can handle.</p>
                <p>For repeatable setup, I added a fixturing table to hold workpieces in consistent positions. Longer motor cables and cable chains keep the wiring routed safely and clear of the moving frame.</p>
                <h3>Result</h3>
                <p>The upgrades have made the engraver more accurate, easier to set up, and better equipped for a wider range of jobs.</p>
                <img style={{maxWidth:"100%"}} src={laser2} alt="Laser-engraved wooden coasters"></img>
            </div>,
    img:laser1, 
    url:"" 
    },
    {title:"Plasma Cutter", 
        overview:<p>A custom 3D-printed CNC gantry that automates the movement of a handheld plasma cutter.</p>, 
        content:<div>
                    <h3>Design and fabrication</h3>
                    <p>I designed the machine from scratch in Fusion 360, then 3D printed the components. The goal was to add CNC capabilities to a normally handheld plasma cutter.</p>
                    <h3>Motion and control</h3>
                    <p>Lead screws and stepper motors control the torch movement, providing repeatable and accurate positioning.</p>
                    <h3>Managing interference</h3>
                    <p>Plasma cutting creates electromagnetic interference, so I used shielded cables to reduce its effect on the machine's wiring and motion control.</p>
                </div>,
        img:plasmaCutter, 
        url:"" 
    },
    {title:"Bicycle Rebuild", 
        overview:<p>A stock beach cruiser transformed into a chopper-style build with a modified frame, custom handlebars, and an elongated chain.</p>, 
        content:<div>
                    <h3>Frame fabrication</h3>
                    <p>I started with a stock beach cruiser, stripped it down, and cut the frame with an angle grinder. I fabricated new frame sections and welded them in to create a more chopper-style riding position.</p>
                    <p>I also fitted custom handlebars and an elongated chain to suit the revised frame geometry.</p>
                    <img style={{maxWidth:"100%"}} src={bicycleBefore} alt="Bicycle before the rebuild"></img>
                    <img style={{maxWidth:"100%"}} src={bicycleWelding} alt="Welding work during the bicycle rebuild"></img>
                    <h3>Finish</h3>
                    <p>After fabrication, I painted the stripped frame black.</p>
                    <img style={{maxWidth:"100%"}} src={bicycleFinished} alt="Finished bicycle after the rebuild"></img>
                </div>,
        img:bicycleFinished, 
        url:"" 
    },
    {title:"Homelab", 
        overview:<p>A custom-organized homelab with a NAS, mini PC, Kubernetes Pi cluster, and rack-mounted gaming PC.</p>, 
        content:<div>
                    <h3>Equipment</h3>
                    <p>The rack brings together a NAS, a mini PC, a Kubernetes cluster built from Raspberry Pis, and a custom rack-mounted gaming PC.</p>
                    <p>The homelab runs my Home Assistant home automation server and gives me a place to learn and practise infrastructure and DevOps skills.</p>
                    <p>I am in the process of converting the existing infrastructure to use Terraform and Ansible.</p>
                    <h3>Design and organization</h3>
                    <p>I designed and 3D printed parts throughout the project to organize the equipment and create a clean, tidy rack layout.</p>
                </div>,
        img:homelab, 
        url:"" 
    },
    {title:"USB Macro Pad", 
        overview:<p>A custom shortcut pad that makes frequent computer tasks quicker and easier.</p>, 
        content:<div>
                    <h3>What it does</h3>
                    <p>I built this USB macro pad to speed up common tasks on my PC. It has five MX switches and three rotary encoders, programmed for actions such as:</p>
                    <ul>
                        <li>Opening programs and triggering frequent key presses.</li>
                        <li>Repeating routine tasks.</li>
                        <li>Muting or unmuting my microphone.</li>
                        <li>Adjusting the computer's volume with a rotary encoder.</li>
                    </ul>
                    <h3>Design and build</h3>
                    <p>An Arduino Pro Micro lets the pad connect to the computer as a keyboard or mouse. I designed the circuit board in EasyEDA and had the custom PCB manufactured by JLCPCB.</p>
                </div>,
        img:macro1, 
        url:"https://github.com/GRitchie1/Macro-Pad" 
    },
    {title:"Custom Motorcycle", 
        overview:<p>A hands-on rebuild transforming a classic cruiser into a custom bobber.</p>, 
        content:<div>
                    <h3>Project overview</h3>
                    <p>I customised a standard green-and-cream Yamaha XVS650A Classic, changing its cruiser look into a black bobber style. The work included making custom brackets and panels.</p>
                    <h3>Changes</h3>
                    <ul>
                        <li>Replaced the mudguard and rear indicators.</li>
                        <li>Changed the footboards to foot pegs.</li>
                        <li>Replaced the electronic gear shifter with the stock shifter.</li>
                        <li>Added a bobber seat and changed the colour to black.</li>
                    </ul>
                    <h3>Before the rebuild</h3>
                    <img style={{maxWidth:"100%"}} src={before} alt="motorbike before"></img>
                    <h3>During the rebuild</h3>
                    <img style={{maxWidth:"100%"}} src={during} alt="motorbike during"></img>
                    <h3>Finished bike</h3>
                    <img style={{maxWidth:"100%"}} src={after} alt="motorbike after"></img>
                </div>,
        img:bike1, 
        url:"" 
    },
    {title:"On Air Sign", 
        overview:<p>A connected studio sign that can be controlled remotely while recording.</p>, 
        content:<div>
                    <h3>Design and build</h3>
                    <p>I built a Wi-Fi-enabled On Air sign that can be switched remotely. The enclosure is a repurposed wine box, painted black with foil inside to reflect the light. I added individual letter stickers to the front panel.</p>
                    <p>A small relay switches the LED strip. A USB supply provides 5V to the sign's electronics and lights.</p>
                    <img style={{maxWidth:"100%"}} src={onAir2} alt="on air sign wiring"></img>
                    <h3>Remote control</h3>
                    <p>The ESP8266 hosts a simple web page with controls to turn the sign's lights on and off.</p>
                    <img style={{maxWidth:"100%"}} src={onAir3} alt="on air sign web interface"></img>
                </div>,
        img:onAir1, 
        url:"" 
    },
    ]

var projectPriority = [
        "Homelab",
        "Plasma Cutter",
        "RFID Robotic Arm",
        "Laser Engraver - Rebuild and Upgrade",
        "Bicycle Rebuild",
        "Custom Motorcycle"
]

projectslist.sort((firstProject, secondProject) => {
        const firstPriority = projectPriority.indexOf(firstProject.title)
        const secondPriority = projectPriority.indexOf(secondProject.title)
        return (firstPriority === -1 ? projectPriority.length : firstPriority) -
                (secondPriority === -1 ? projectPriority.length : secondPriority)
})

export default projectslist;