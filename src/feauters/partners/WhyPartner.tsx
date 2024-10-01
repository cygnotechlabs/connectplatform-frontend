import handImage from "../../assets/images/Group 50.png";
import companyNames from "../../assets/images/Frame 31.png"
type Props = {};

function WhyPartner({ }: Props) {
    return (
        <>
        <div className="mt-20  py-12 px-6 md:px-24">
            <div className="flex flex-col md:flex-row mt-12 gap-11 justify-between items-center">
                <div className="w-full md:w-[60%] space-y-8 ">
                    {/* Global Block */}
                    <div className="mb-10">
                        <h2 className="text-5xl font-bold text-[#161C2D]">
                            Why partner with us?
                        </h2>
                        <p className="mt-5 text-lg text-[#6c757d]">
                            We share common trends and strategies for improving your rental income.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">

                        <img src="/public/Feature 1.png" className="h-1/2" alt="" />


                        <div>
                            <h3 className="text-lg font-bold text-[#161C2D]">Global</h3>
                            <ul className="mt-2 text-[#6c757d] space-y-2 ms-3">
                                <li>Operations in 54 countries and territories</li>
                                <li>Over 30,000 employees worldwide</li>
                                <li>150 distribution partners worldwide</li>
                            </ul>
                        </div>
                    </div>

                    {/* APAC Block */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                        <img src="/public/Feature 2.png" className="h-1/2" alt="" />

                        <div>
                            <h3 className="text-lg font-bold text-[#161C2D]">APAC</h3>
                            <ul className="mt-2 text-[#6c757d] space-y-2 ms-3">
                                <li> Operations in 14 countries and territories</li>
                                <li>1.78 million claims handled annually</li>
                                <li>$1.42 billion in total annual claims</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full md:w-[50%] mt-10 md:mt-0 relative flex justify-end">
                    <img
                        src={handImage}
                        alt="Hand Image"
                        className="w-full h-auto object-contain"
                    />

                </div>
            </div>
            <div className="mt-20">
                <p className="text-center text-4xl font-bold">Meet some of our partners</p>
            </div>
        </div>
                <img src={companyNames} alt=""  className="mb-20"/>
                </>
    );
}

export default WhyPartner;
