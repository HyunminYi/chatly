// "use client";

// import { useModelStore } from "@/app/store/model";

import Chat from "@/app/components/chat/Chat";

const Page = () => {
  // const { model: currentModel, updateModel } = useModelStore((state) => ({
  //   model: state.model,
  //   updateModel: state.updateModel,
  // }));
  // console.log("currentModel", currentModel);
  return (
    <>
      <Chat />
    </>
  );
};

export default Page;
