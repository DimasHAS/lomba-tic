
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kalkulator - TaniMaju",
    description: "Kalkulator for TaniMaju",
};

const CalculatorPage = () => {
    return (
        <div className="p-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start mb-8">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <span className="material-icons text-green-600">receipt_long</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Planting Needs Calculator</h1>
                        <p className="text-gray-500">Full Cycle Input Planning</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="land-area">Land Area (hectares)</label>
                        <input className="w-full border border-gray-300 rounded-lg p-2 focus:ring-green-500 focus:border-green-500" id="land-area" placeholder="Enter area" type="text" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="crop-type">Crop Type</label>
                        <div className="relative">
                            <select className="w-full border border-gray-300 rounded-lg p-2 appearance-none pr-8 focus:ring-green-500 focus:border-green-500" id="crop-type">
                                <option>Select crop</option>
                            </select>
                            <span className="material-icons absolute right-2 top-2 text-gray-400">expand_more</span>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700 flex items-center mb-4">
                        <span className="material-icons text-green-500 mr-2">paid</span>
                        Cost Breakdown Preview
                    </h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="py-2 text-sm font-medium text-gray-500">Item</th>
                                <th className="py-2 text-sm font-medium text-gray-500">Quantity</th>
                                <th className="py-2 text-sm font-medium text-gray-500">Unit Cost</th>
                                <th className="py-2 text-sm font-medium text-gray-500 text-right">Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="py-4 flex items-center text-gray-700"><span className="material-icons text-gray-400 mr-2 text-base">grass</span>Seeds</td>
                                <td className="py-4 text-gray-600">25 kg</td>
                                <td className="py-4 text-gray-600">$45</td>
                                <td className="py-4 text-gray-800 font-semibold text-right">$1,125</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-4 flex items-center text-gray-700"><span className="material-icons text-gray-400 mr-2 text-base">science</span>Fertilizer</td>
                                <td className="py-4 text-gray-600">150 kg</td>
                                <td className="py-4 text-gray-600">$28</td>
                                <td className="py-4 text-gray-800 font-semibold text-right">$4,200</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-4 flex items-center text-gray-700"><span className="material-icons text-gray-400 mr-2 text-base">bug_report</span>Pesticides</td>
                                <td className="py-4 text-gray-600">12 L</td>
                                <td className="py-4 text-gray-600">$85</td>
                                <td className="py-4 text-gray-800 font-semibold text-right">$1,020</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="py-4 flex items-center text-gray-700"><span className="material-icons text-gray-400 mr-2 text-base">engineering</span>Labor</td>
                                <td className="py-4 text-gray-600">40 hrs</td>
                                <td className="py-4 text-gray-600">$15</td>
                                <td className="py-4 text-gray-800 font-semibold text-right">$600</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="pt-4 font-semibold text-gray-800" colSpan={3}>Total</td>
                                <td className="pt-4 font-bold text-green-600 text-right">$6,945</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <button className="w-1/2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center mr-4">
                        <span className="material-icons mr-2">calculate</span>
                        Calculate Needs
                    </button>
                    <button className="w-1/2 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg flex items-center justify-center">
                        <span className="material-icons mr-2">description</span>
                        Generate Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CalculatorPage;
