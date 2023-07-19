import { Tabs, Tab } from "./CustomTabs";
import coverImage from "../assets/images/photo-schedule2.jpg";

const ScheduleSection = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Mountain 1">
          <section
            className="bg-cover bg-no-repeat h-screen  w-full"
            style={{
              backgroundImage: `url(${coverImage})`,
            }}
          >
            <div className="py-4 px-8 bg-white opacity-80 w-96 top-52 left-80 relative">
              <h4 className="text-3xl font-bold text-fiord-500">SCHEDULE</h4>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="py-2 w-40">25 Nov 2016</td>
                    <td className="py-2 w-40">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-40">28 Nov 2016</td>
                    <td className="py-2 w-40">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-40">18 Dec 2016</td>
                    <td className="py-2 w-40">Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-40">7 Jan 2016</td>
                    <td className="py-2 w-40">Vestibulum viverra</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </Tab>
        <Tab label="Mountain 2">
          <section
            className="bg-cover bg-no-repeat h-screen  w-full"
            style={{
              backgroundImage: `url(${coverImage})`,
            }}
          >
            <div className="py-4 px-8 bg-white opacity-80 w-96 top-52 left-80 relative">
              <h4 className="text-3xl font-bold text-fiord-500">SCHEDULE</h4>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="py-2 w-40">25 Oct 2016</td>
                    <td className="py-2 w-40">Vestibulum</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-40">28 Oct 2016</td>
                    <td className="py-2 w-40">Vestibulum</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-40">18 Oct 2016</td>
                    <td className="py-2 w-40">Vestibulum</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-40">7 JOct2016</td>
                    <td className="py-2 w-40">Vestibulum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ScheduleSection;
