import { CiSquareChevRight } from "react-icons/ci";

export default function SubmitBtn() {
  return (
    <>
      <button type="submit" className="submit-btn pr-2">
        <CiSquareChevRight
          size={32}
          color="f25d27"
          strokeWidth={1}
          title="submit button"
        />
      </button>
    </>
  );
}
