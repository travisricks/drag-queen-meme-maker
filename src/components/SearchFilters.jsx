/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import "../styles/SearchFilters.scss";

export default function SearchFilters(props) {
  return (
    <div className="searchFilters">
      <span>Select by:</span>
      <form>
        <select>
          <option value="queen">Queen</option>
          {props.names.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <select>
          <option value="queen">Mood</option>
          {props.moods.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
