# src-flag-filter
Chrome extension that filters speedrun.com leaderboards based on the flag of the runner, which is not a native feature of the site. (for some reason)

Works only with the new redesign of src. Working as of 1/1/2022. Whipped up in a couple of hours.

**THIS EXTENSION IS ONLY A PROOF OF CONCEPT / PROTOTYPE**

See the following:
- Runs by non-src accounts with a flag will not be filtered (will be missed).
- Co-op runs are not accounted for
- Trophy Icons are lost.
- Input is not stored on popup close.
  - Country codes are not supported, just the tooltip on flag hover.
  - Input is just through a text-box. Dropdowns may be a better approach. This has not been explored.
- Alternate row classes (light/dark) are not adjusted / accounted for when filtering. It retains it's original styling.
- It does not have pretty front-end (in the popup). Only has what it needs to make it work.
- Can be slow on larger leaderboards. But speedrun.com is slow enough as it is so it won't hurt :)

Please, if you would like to help with any of the above, feel free to fork and submit a PR. I would be honored :).

## Usage
From the popup window (ignore the text, I am fully capable and do make the rules):

![Popup demonstration](https://i.imgur.com/BAgJIEi.png)

Results in:

![Resulting filter](https://i.imgur.com/Ojvkrjg.png)

Wow! Cool!
Each row in the table has the Flag rank followed by world rank.

## Project Structure
Simple enough:
- popup.* regards the popup action window in the Chrome taskbar. popup.js sends a message to the active tab using the chrome tabs API which is intercepted by content.js.
- content.* regards content-scripts and interacting with the DOM. In this case, that is the actual filtering logic. 
- manifest.json is properties regarding the Chrome extension.

## Installation
*This extension is not available from the CWS. I do not plan on making it available, unless there is significant demand.*

Otherwise, clone or download this repository to a folder on your computer. Go to chrome://extensions and turn on Developer mode from the taskbar. Then, click "Load unpacked" and select the parent folder of the repo. Reload the extension using the refresh button when you make changes.
