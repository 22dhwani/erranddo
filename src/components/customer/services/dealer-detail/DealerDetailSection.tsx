import Heading from "../../../UI/Heading";
import GoldStar from "../../../../assets/GoldStar.svg";
import Star from "../../../../assets/Star.svg";
import Button from "../../../UI/Button";
import LeftArrow from "../../../../assets/right-arrow.svg";
import LocationIcon from "../../../../assets/LocationIcon";
import { useTheme } from "../../../../store/theme-context";
import { useNavigate, useParams } from "react-router";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../../../Firebase";

import { NavLink } from "react-router-dom";

function DealerDetailSection(props: {
  icon: any;
  title: string;
  subTitle: string;
  description: string;
  location: number;
  ratingCount: number;
}) {
  const { theme } = useTheme();
  const id = useParams().id;
  const token = JSON.parse(localStorage.getItem("data") ?? "");
  const user = { uid: id ?? 0, fullName: props.title ?? "No Name" };
  const currentUser = { uid: token.id, fullName: token.full_name ?? "No Name" };
  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      +currentUser.uid < +user?.uid
        ? currentUser.uid + "-" + user?.uid
        : user?.uid + "-" + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      const getChatQuery = query(
        collection(db, "chats"),
        where("chat_id", "==", combinedId)
      );
      const getChatDocument = await getDocs(getChatQuery);

      if (!res.exists() && getChatDocument.empty) {
        const usersObject: any = {};
        usersObject[1] = currentUser;
        usersObject[2] = user;

        const loginUser = {
          id: user.uid,
          fullName: user.fullName,
        };

        const otherUser = {
          id: currentUser.uid,
          fullName: currentUser.fullName,
        };
        const chatData = {
          chat_id: combinedId,
          users_ids: [currentUser.uid, user.uid],
          updated_at: serverTimestamp(),
          created_at: serverTimestamp(),
          users: [
            {
              user_id: loginUser.id,
              badge: 0,
              full_name: loginUser.fullName,
            },
            {
              user_id: otherUser.id,
              badge: 0,
              full_name: otherUser.fullName,
            },
          ],
        };
        //create a chat in chats collection
        const temp = await addDoc(collection(db, "chats"), { ...chatData });
        await addDoc(collection(db, "chats", temp.id, "messages"), {
          message: "hello",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const subServices = props.subTitle?.split(",") ?? [];
  return (
    <>
      <div className="border-b-[0.5px] border-b-slate-300 lg:py-10 xs:py-5 ">
        <img
          src={props.icon}
          className="lg:w-48 xs:w-20 float-left mr-5 lg:h-48 xs:h-20 rounded-full object-cover"
        />
        <div className=" my-2 relative">
          <NavLink to="/messages" state={{ id: id }}>
            <Button
              variant="filled"
              color="primary"
              size="normal"
              children="Messages"
              centerClassName="flex items-center justify-center"
              buttonClassName="!px-4  text-sm tracking-wide py-[0.7rem] xs:hidden lg:inline !absolute top-0 right-0"
              onClick={() => {
                handleSelect();
              }}
            />
          </NavLink>
          <Heading
            text={props.title}
            variant="subTitle"
            headingclassname="text-textColor !font-bold tracking-wide !text-lg dark:text-darktextColor"
          />

          <div className="lg:my-3 xs:my-2 flex gap-1 text-gray-500 !font-normal tracking-wide !text-xs ">
            {Array.from({ length: props.ratingCount }, () => (
              <img src={GoldStar} />
            ))}
            {Array.from({ length: 5 - props.ratingCount }, () => (
              <img src={Star} />
            ))}
            <Heading
              text={`${props.ratingCount} of 5 / 120`}
              variant="subHeader"
              headingclassname="text-gray-500 !font-normal tracking-wide !text-xs mx-2 dark:text-darktextColor"
            />
          </div>
          <div className="lg:my-3 xs:mt-10 lg:flex xs:flex xs:flex-wrap gap-2">
            {subServices.map((item, key) => {
              return (
                <div className="flex gap-2">
                  <Heading
                    text={
                      item.replace(".", "") +
                      (key !== subServices?.length - 1 ? "   | " : "")
                    }
                    variant="subHeader"
                    headingclassname="text-textColor !font-semibold tracking-wide !text-sm dark:text-darktextColor"
                  />
                </div>
              );
            })}
          </div>
          <div className="my-3">
            <Heading
              text={`${props.description}`}
              variant="subHeader"
              headingclassname="text-gray-500 !font-normal tracking-wide !lg:text-xs xs:text-md"
            />
          </div>

          <div className="mt-3 lg:mb-7 flex lg:flex-row gap-2 lg:items-center xs:flex-col">
            <div className="flex gap-2">
              <img src={LeftArrow} className="w-3 lg:hidden" />
              <Heading
                text={`Response Time : 34 min`}
                variant="subHeader"
                headingclassname="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md"
              />
            </div>
            <Heading
              text={`|`}
              variant="subHeader"
              headingclassname="text-primaryYellow !font-normal tracking-wide !text-sm xs:hidden lg:inline"
            />
            <div className="flex gap-2">
              <img src={LeftArrow} className="w-3 lg:hidden " />
              <Heading
                text={`Years in Business : 7`}
                variant="subHeader"
                headingclassname="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md "
              />
            </div>

            <Heading
              text={`|`}
              variant="subHeader"
              headingclassname="text-primaryYellow !font-normal tracking-wide !text-sm xs:hidden lg:inline"
            />
            <div className="flex gap-2">
              <img src={LeftArrow} className="w-3 lg:hidden" />
              <Heading
                text={`Errando Hires : 25`}
                variant="subHeader"
                headingclassname="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md "
              />
            </div>
            <Heading
              text={`|`}
              variant="subHeader"
              headingclassname="text-primaryYellow !font-normal tracking-wide !text-sm xs:hidden lg:inline "
            />
            <div className="flex gap-2">
              <img src={LeftArrow} className="w-3 lg:hidden" />
              <div className=" flex gap-2 items-center">
                {theme === "light" && (
                  <div children={<LocationIcon color="black" />} />
                )}

                {theme === "dark" && (
                  <div children={<LocationIcon color="white" />} />
                )}
                <Heading
                  text={`${props.location} miles away`}
                  variant="subHeader"
                  headingclassname="text-primaryYellow !font-semibold tracking-wide lg:text-xs text-md "
                />
              </div>
            </div>
            <div className=" mt-3">
              <NavLink
                to="/messages"
                state={{
                  userid: user.uid,
                  userFullName: user.fullName,
                  currentUserId: currentUser.uid,
                }}
              >
                <Button
                  variant="filled"
                  color="primary"
                  size="normal"
                  children="Messages"
                  centerClassName="flex items-center justify-center"
                  buttonClassName="!px-4  text-sm tracking-wide py-[0.7rem] lg:hidden w-full"
                  onClick={() => console.log("click")}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealerDetailSection;
