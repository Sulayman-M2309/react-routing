import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  //  show all data
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-10">
     
      <div className="grid grid-cols-2 gap-6 mt-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary mt-8 mb-8 items-center ml-[47%]"
        >
          See All jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;