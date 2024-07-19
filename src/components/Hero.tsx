import React from "react";

export default function Hero() {
  return (
    <div>
      <div className=" shadow-lg p-16 mb-5 bg-body rounded">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">
              การวิเคราะห์ข้อมูลขนาดใหญ่สำหรับรัฐประศาสนศาสตร์
            </h1>
            <p className="py-6">
              หลักสูตรรัฐประศาสนศาสตร์ คณะศิลปศาสตร์เเละวิทยาการจัดการ
              มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร
            </p>
            <button className="btn btn-primary">
              <a href="/getapp">Get Started</a>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
