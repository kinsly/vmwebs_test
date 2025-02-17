import { CardData } from "@/types/coverageCardData";

export default function Details({ data }: { data: CardData[] }) {
  
  //Get left column item count
  const leftColumnCount = Math.ceil(data.length / 2);

  return (
    <div className="mx-auto p-4shadow-lg rounded-2xl">
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <table className="table-auto w-full">
            <tbody>
              {data.slice(0, leftColumnCount).map((item, index) => (
                <tr key={index}>
                  <td className="p-2 pr-10 text-right whitespace-nowrap">{item.name}</td>
                  <td className="p-2 text-left">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Column */}
        <div>
          <table className="table-auto w-full">
            <tbody>
              {data.slice(leftColumnCount).map((item, index) => (
                <tr key={index}>
                  <td className="p-2 pr-10 text-right whitespace-nowrap">{item.name}</td>
                  <td className="p-2 text-left">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}