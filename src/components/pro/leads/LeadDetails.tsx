import Heading from "../../UI/Heading";
import HomeCard from "../dashboard/home/HomeCard";
import Credit from "../../../assets/Credit.svg";

import Button from "../../UI/Button";
import LeadsDetailSkeleton from "../skeleton/Leads/LeadsDetailSkeleton";
import { useParams } from "react-router";
import useSWR from "swr";
import { fetcher } from "../../../store/customer/home-context";
import { LeadsDetail } from "../../../models/pro/leadsdetail";

function LeadDetails() {
  const isLoading = false;

  const leadsId = useParams();
  const dealerdetailurl = `https://erranddo.kodecreators.com/api/v1/user-leads/${leadsId.id}/detail`;
  const { data: leadsDetailData } = useSWR(dealerdetailurl, fetcher);
  const leadsDetail: LeadsDetail = leadsDetailData?.data;

  return (
    <div>
      {isLoading ? (
        <LeadsDetailSkeleton limit={1} />
      ) : (
        <HomeCard className="rounded-md  px-5 pb-10 mt-5">
          <div className="py-4 border-b-[0.5px] border-b-slate-200">
            <Heading
              text={`Leads Details`}
              variant="subHeader"
              headingclassName="!font-bold  text-textColor  text-xl tracking-wide dark:text-white"
            />
          </div>
          <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-6">
            {leadsDetail?.user_request?.answers?.length ? (
              leadsDetail.user_request.answers.map((answer) => (
                <div key={answer.id}>
                  <Heading
                    text={answer.question.title}
                    variant="subTitle"
                    headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-slate-400 "
                  />
                  <Heading
                    text={answer.answer}
                    variant="subHeader"
                    headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                  />
                </div>
              ))
            ) : (
              <div>
                <Heading
                  text={"No data available"}
                  variant="subHeader"
                  headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
                />
              </div>
            )}
          </div>
          <div className="py-4 grid lg:grid-cols-2 xs:gap-3 lg:gap-0">
            <div>
              <Heading
                text={"Comments / Photos"}
                variant="subTitle"
                headingclassName="!font-semibold text-slate-400 !text-sm  mx-1 tracking-wide dark:text-slate-400 "
              />
              <Heading
                text={leadsDetail?.user_request?.comment}
                variant="subHeader"
                headingclassName="!font-normal !text-lg mx-1 text-textColor tracking-wide dark:text-white"
              />
            </div>
          </div>
          <div className="py-4 flex justify-between gap-5">
            <div>
              <img
                src={`https://erranddo.kodecreators.com/storage/${leadsDetail?.user_request?.file}`}
                className="lg:h-60 md:h-36 xs:h-28 w-full object-cover"
              />
            </div>
          </div>
          <div className="py-4 flex lg:flex-row xs:flex-col justify-between gap-5">
            <div className="flex w-full items-center gap-3">
              <img src={Credit} className="w-5 h-5 object-cover" />
              <Heading
                text={`3 credits`}
                variant="subHeader"
                headingclassName="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
              />
              <Button
                variant="filled"
                color="secondary"
                size="normal"
                children="Buy Leads"
                buttonClassName="!px-4 py-2 text-sm tracking-wide"
              />
            </div>
            <div className="flex w-full items-center gap-3">
              <img src={Credit} className="w-5 h-5 object-cover" />
              <Heading
                text={`6 credits`}
                variant="subHeader"
                headingclassName="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
              />
              <Button
                variant="filled"
                color="secondary"
                size="normal"
                children="Buy Leads"
                buttonClassName="!px-4 py-2 text-sm tracking-wide"
              />
            </div>
          </div>
          <div className=" relative w-full">
            <div className="absolute flex lg:right-0">
              <Heading
                text={`Why share this lead?`}
                variant="subHeader"
                headingclassName="!font-normal !text-sm mx-1 text-textColor tracking-wide dark:text-white"
              />
              <Heading
                text={`BUY OUTRIGHT`}
                variant="subHeader"
                headingclassName="!font-normal !text-sm mx-1 text-primaryYellow tracking-wide dark:text-primaryYellow"
              />
            </div>
          </div>
        </HomeCard>
      )}
    </div>
  );
}

export default LeadDetails;
