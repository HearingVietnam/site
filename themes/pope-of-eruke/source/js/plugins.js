/* 
 * Gerneral Plugins - plugins.js 
 * Copyright (C) 2017  Chiayo Lin <chiayo.lin@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* transparent navbar */
$(window).scroll(() => {
  if($(window).scrollTop() > 50) {
    $("#opaque-navbar").addClass("opaque");
    //$("#navbar-text").show()
    //$("#navbar-logo").hide()
  } else {
    $("#opaque-navbar").removeClass("opaque");
    //$("#navbar-text").hide()
    //$("#navbar-logo").show() 
  }});

/* loop multiple videos */
$("#feature-clip").on("ended", () => {
  ((id) => {
    var select = (query, _id = id) => document.querySelector(_id + query);
    
    var now  = select(" source.active");
    var next = select(" source.active + source") || 
               select(" source:first-child");
  
    now.className  = "";
    next.className = "active";
  
    $(id)[0].src = next.src;
    $(id)[0].play();
  })("#feature-clip")});
