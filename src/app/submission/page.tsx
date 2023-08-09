import Submission from "./components/Submission";

export default function SubmissionPage() {
  return (
    <div className="bg-[url('/images/compregister/bg-comp-mobile.svg')] lg:bg-[url('/images/compregister/bg-comp-web.svg')] bg-cover min-h-screen flex flex-col">
        <div className="bg-[url('/images/compregister/right.svg')] lg:bg-[url('/images/compregister/right-web.svg')] bg-no-repeat bg-right-bottom lg:bg-right-top flex-1">
          <Submission />
        </div>
    </div>
  );
}
