import { useState } from "react";
import LeaveReviewModal from "../../../../layout/pro-models/LeaveReviewModal";
import Button from "../../../UI/Button";
import DropdownCompoenet from "../../../UI/Dropdown";
import Heading from "../../../UI/Heading";

function ReviewsBar() {
  const dropDownOne = ["Last Added", "Last Updated", "A-Z", "Z-A"];
  const [showReviewModal, setShowReviewModal] = useState(false);
  return (
    <div>
      {showReviewModal && (
        <LeaveReviewModal
          onCancel={() => {
            setShowReviewModal(false);
          }}
        />
      )}
      <div className="lg:flex-row xs:flex-col flex  lg:items-center xs:items-start justify-between box-border py-5 border-y-[0.5px] border-y-slate-300 mt-10 xs:gap-3 lg:gap-0">
        <div className="flex lg:gap-10 flex-row  lg:items-center xs:items-start xs:gap-3  xs:w-full justify-between">
          <Heading
            text={"Reviews"}
            variant="subHeader"
            headingclassName="text-textColor !font-bold tracking-wide dark:text-darktextColor"
          />
          <Button
            variant="ghost"
            color="secondary"
            size="normal"
            children="Leave Review"
            buttonClassName="!px-4 py-2 text-sm tracking-wide flex"
            onClick={() => {
              setShowReviewModal(!showReviewModal);
            }}
          />
        </div>
        <div className="lg:ml-auto xs:w-full lg:w-44">
          <DropdownCompoenet
            options={dropDownOne}
            onChange={(newValue) => {
              console.log(newValue.value);
            }}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewsBar;
