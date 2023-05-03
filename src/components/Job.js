import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const Job = (props) => {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];

  const [icon, setIcon] = useState("");

  console.log(logo);

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      setIcon(d.default);
    });
  };

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <div className="job-container">
      <div className="logo">
        <img src="{icon}" alt="" />
      </div>
      <div className="part1">
        <div className="company">
          <div className="cname">{company}</div>
          {props.data.new && <span className="new">new!</span>}
          {props.data.featured && <span className="featured">featured!</span>}
        </div>

        <div className="position">{position}</div>

        <div className="details">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>

        <div className="part2">
          {keywords.map((key, id) => (
            <Button variant="contained" key={id}>
              {key}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
