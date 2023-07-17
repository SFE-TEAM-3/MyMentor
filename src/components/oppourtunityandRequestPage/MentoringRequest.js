import React, { useState } from "react";
import "./mentoropp.css";
import Items from "./Items";
import { FaPlusSquare } from "react-icons/fa";

const MentoringRequest = () => {
  const [data, setdata] = useState([
    {
      title: "Website UI design implementation",
      time_and_date: "2022/ 07 / 31",
      status: "Published",
      requests: [
        {
          username: "Balquees Hamdi",
          img: "https://image.lexica.art/md2/37d7fb15-eed3-472b-bbae-57240a15704a",
          title: "Front end developer",
        },
        {
          username: "Balquees Hamdi",
          img: "https://image.lexica.art/md2/37d7fb15-eed3-472b-bbae-57240a15704a",
          title: "Front end developer",
        },
        {
          username: "Balquees Hamdi",
          img: "https://image.lexica.art/md2/37d7fb15-eed3-472b-bbae-57240a15704a",
          title: "Front end developer",
        },
      ],
    },
    {
      title: "Website UI design implementation",
      time_and_date: "2022/ 07 / 31",
      status: "closed",
      requests: [],
    },
    {
      title: "Website UI design implementation",
      time_and_date: "2022/ 07 / 31",
      status: "In progress",
      requests: [
        {
          username: "Balquees Hamdi",
          img: "https://image.lexica.art/md2/37d7fb15-eed3-472b-bbae-57240a15704a",
          title: "Front end developer",
        },
        {
          username: "Balquees Hamdi",
          img: "https://image.lexica.art/md2/37d7fb15-eed3-472b-bbae-57240a15704a",
          title: "Front end developer",
        },
        {
          username: "Balquees Hamdi",
          img: "https://image.lexica.art/md2/37d7fb15-eed3-472b-bbae-57240a15704a",
          title: "Front end developer",
        },
      ],
    },
    {
      title: "Website UI design implementation",
      time_and_date: "2022/ 07 / 31",
      status: "closed",
      requests: [],
    },
  ]);

  const removeItem = (index) => setdata(data.filter((_, i) => i !== index));

  return (
    <div>
      <aside>
        <div className="dff">
          <p>User Profile</p>
          <p>Settings</p>
          <p>Terms and Privacy</p>
          <p className="mentor">My Mentoring Requests</p>
          <p>
            New Mentoring Request &nbsp;
            <a href="#" target="_blank">
              {/* <i className="fas fa-plus-square icon1"></i> */}
              <FaPlusSquare className="add-request icon1" />
            </a>
          </p>
        </div>
      </aside>
      <section className='mentoringsection'>
        <p className="hidden">Applications</p>
        {data.map((item, i) => (
          <Items item={item} key={i} removeItem={() => removeItem(i)} />
        ))}
      </section>
    </div>
  );
};

export default MentoringRequest;
