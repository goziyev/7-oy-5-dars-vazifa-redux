import Image from "next/image";
import img from "../../public/learn.png";
function Learn() {
  return (
    <div className="container items-center  justify-around mx-auto mb-9 gap-9 p-4">
      <h5 className="text-4xl font-[700] mb-5 text-center">
        What will You learn ?
      </h5>
      <div className="flex items-center justify-between">
        <div
          className="flex  gap-7 "
          style={{ flexWrap: "wrap", width: "1000px" }}
        >
          <div className="bg-gray-200 w-2/6 p-5">
            <p
              className="bg-warning mb-9"
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                textAlign: "center",
                padding: "8px",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              01
            </p>
            <p className="font-[600] text-xl w-4/6">
              Use HDFS & Map Reduce for storing & analyzing data at scale.
            </p>
          </div>
          <div className="bg-gray-200 w-2/6 p-5">
            <p
              className="bg-warning mb-9"
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                textAlign: "center",
                padding: "8px",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              02
            </p>
            <p className="font-[600] text-xl w-4/6">
              Use HDFS & Map Reduce for storing & analyzing data at scale.
            </p>
          </div>
          <div className="bg-gray-200 w-2/6 p-5">
            <p
              className="bg-warning mb-9"
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                textAlign: "center",
                padding: "8px",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              03
            </p>
            <p className="font-[600] text-xl w-4/6">
              Use HDFS & Map Reduce for storing & analyzing data at scale.
            </p>
          </div>
          <div className="bg-gray-200 w-2/6 p-5">
            <p
              className="bg-warning mb-9"
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                textAlign: "center",
                padding: "8px",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              04
            </p>
            <p className="font-[600] text-xl w-4/6">
              Use HDFS & Map Reduce for storing & analyzing data at scale.
            </p>
          </div>
        </div>
        <div>
          <Image src={img} width="600" alt="Learn" />
        </div>
      </div>
    </div>
  );
}

export default Learn;
