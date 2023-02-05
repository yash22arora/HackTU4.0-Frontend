import { useState } from "react";
import Button from "~/components/Button";
import Empty from "../../../assets/empty.svg";

const Leaderboard: React.FC = () => {
  const [friends, setFriends] = useState([]);

  return (
    <div className="p-4 px-8 text-center">
      <h1 className="text-2xl text-center w-full mt-8">Leaderboard</h1>
      <p className="text-sm text-outline font-thin text-center w-full my-4 mb-8">
        See where you stand among your close friends in terms of cashbacks
        earned
      </p>
      {friends.length === 0 && (
        <>
          <img src={Empty} alt="Empty" className="w-1/2 mx-auto mt-24" />
          <h2 className="text-lg text-center w-full mt-8 font-semibold">
            Uh Oh :{"("}
          </h2>
          <p className="text-sm text-outline font-thin text-center w-full my-4 mb-8">
            You are running in the race alone
          </p>
          <Button variant="secondary" className="mt-12">
            Add Friends
          </Button>
        </>
      )}
      {friends.length > 0 && friends.length < 3 && <></>}
    </div>
  );
};

export default Leaderboard;
