import React from "react";
import "../styles/App.scss";
import "../styles/SearchFilters.scss";

export default function SearchFilters(props) {
  return (
    <div className="searchFilters">
      <span>Select by:</span>
      <form>
        <select>
          <option value="queen">Queen</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <select>
          <option value="queen">Mood</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="shade">Shade</option>
        </select>
      </form>
    </div>
  );
}
