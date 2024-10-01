import globeImage from "../../assets/images/Group.png"
import Button from "../../ui/Button"
type Props = {}

function PartnersForm({ }: Props) {
    const handleCalculate =()=>{
        console.log("as");
        
    }
    return (
        <div className="flex items-center">
            <div className="bg-[#454EB5] w-[37%] h-[770px] flex items-center justify-center">
                <img src={globeImage} alt="" className="w-[70%]" />
            </div>
            <div className="w-[63%] text-[#FFFFFF] bg-[#1B2235] h-[770px] py-28 px-20">
                <p className="text-4xl font-medium">Forecast your growth</p>
                <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis vitae curabitur amet, fermentum lorem. </p>
                <div className="mt-10 space-y-3">
                    <div>
                        <label htmlFor="" className="text-sm absolute mt-3.5 ms-4">Tell us your company name <span className="text-[#FF0000]">*</span></label><br />
                        <input type="text" name="" id="" className="outline-none focus:ring-0 focus:border-transparent w-[100%] h-[46px] px-3 rounded-lg border border-[#404A66] bg-[#232A3E]" />
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm absolute mt-3.5 ms-4">Choose a product</label><br />
                        <select name="" id="" className="w-[100%] h-[46px] text-[#6C727F] px-3 text-xs rounded-lg border border-[#404A66] bg-[#232A3E]">
                            <option value="">Select an option</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm absolute mt-3.5 ms-4">Choose an experience</label><br />
                        <select name="" id="" className="w-[100%] h-[46px] text-[#6C727F] px-3 text-xs rounded-lg border border-[#404A66] bg-[#232A3E]">
                            <option value="">Select an option</option>
                        </select>
                    </div>
                        <div>
                        <label htmlFor="" className="text-sm absolute mt-3.5 ms-4">What’s the commission rate you’d like? <span className="text-[#FF0000]">*</span></label><br />
                        <input type="text" name="" id="" placeholder="In Percentage (%)"  className="outline-none focus:ring-0 focus:border-transparent w-[100%] h-[46px] text-[#6C727F] text-xs rounded-lg border border-[#404A66] bg-[#232A3E] px-3" />
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm absolute mt-3.5 ms-4">Choose a subscription method</label><br />
                        <select name="" id="" className="w-[100%] h-[46px] text-[#6C727F] px-3 text-xs rounded-lg border border-[#404A66] bg-[#232A3E]">
                            <option value="">Select an option</option>
                        </select>
                    </div>
                    <div>
                    <Button
              label="Calculate"
              className="px-14 w-[100%] h-[59px] mt-6"
              onClick={handleCalculate}
            />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PartnersForm