# Project Goals: FrontEnd

### Functionality:

1. Be able to login, and view your projects.
2. Be able to easily and effectively annotate text/code.
3. Track how often code is updated/added to a project.
4. **Purpose:** Often when writting code, we create variables, functions and so on. This can lead to confusion even when teh code is written clearly, especially when new to a code base or returning to a section over a long period of time.
   - Help prevent duplicate names.
   - Help find what a function does in a project.
   - Help users to stay update with eachother and prevent overlap.

### Personal Technical Goals:

1. Practice Creating User Validation.
2. Use Redux to manage state.
3. Connect to a functional backend database.
4. Learn new component Library "RSuite."
5. Improve ability to implement form validation.

 #### Stretch Goals:

1. Allow multiple users to share projects.
2. Internal Messaging
3. Click and Drag on editor.

---

Logs Table:

1. [January 26th](#jan26) : Built Login/Register Page and Forms.
2. [January 30th](#jan30) : Routes and Scaffolding.
3. [January 31st](#jan30) : Extened Redux, Further Back-End Connections.
4. [February 1st](#feb1)  : Scaffold Projects and extended redux state.
5. [February 3rd](#feb3) : Scaffold Code & Snippet Panes.
6. [February 4th](#feb4) : Extened Redux, Began Connecting Snippets and Markers.
7. [February 5th](#feb5) : Code Clean-up, Redux Extended, Fixed Component Mounting.

---

### <a name="feb4">February 5th 2021</a>:

- Organized components more clearly.
  - All Editor relevant components now live in its own folder.
  - All Snippet Components also live in their own folder.
- Snippet Pane now fetches and renders snippets.
- Editor now loads code from database.

> Slow Progress today, got stuck on bugs handling component render. At first thought it was an issue with my use of the `useEffect` hook. But........ it had turned out the entire time there was a minor syntax error in my reducers.
>
> ```javascript
> // WRONG!! one
> case actionTypes.SET_CURRENT_CODE:
>      return{
>           ...state,
>           ...state.application_state:{
>               currentCode: action.payload
>              }
>          }
> // Correct and fixed.
> case actionTypes.SET_CURRENT_CODE:
>      return{
>           ...state,
>           application_state:{
>                ...state.application_state,
>               currentCode: action.payload
>              }
>          }
> ```
>
> - Kicking myself in the head here, not that I didn't know, this is syntaxing I know but somehow slipped through. 
> - Note to self, track how long I try to find a solution in one area.... look else where if its takes to long, and see if the error is elsewhere.
>
> ---
>
> Another note: My redux rootReducer is getting increddibly long at this point, it is time to look into it and break it into separate parts. This should help me catch errors like I had before quicker down the line.
>
> - I split up the actions, I will want to mirror how those files are brocken apart. 
>   - `actionTypes.js [SET_SOMETHING]` <--->  `applicationActions.js`  <--->  `applicationReducers`
>   - `actionTypes.js [FETCH_SOMETHING]` <--->  `fetchActions.js` <---> `fetchReducer`
>   - Continues for `post`,` put`,` delete`.
> - These are not implemented just where my thoughts are leading me at this momment.



### <a name="feb4">February 4th 2021</a>:

#### What was done.

- Restructure and Added to Redux State.
  - Moved action types to its own file, `actionTypes`.
  - Split actions to their own files but still export through `action/index.js`.
  - All fetch actions moved to to `fetchActions.js`.
  - `initialState` now is in its own file, simply makes it easier to see what value is going where.
  - Added cases for markers and snippet actions.
- Seperated out snippet component to its own file.
- Connected `CodeList` and `SnippetPane`:
  - In `CodeList`:
    - `fetchCalls(active)`: This will call the fetch actions related to markers and snippets.
      - This gets called inside the `handleSelect` function on the nav component.
  - In `SnippetPane`: connected snippet store.

> Most work was done on the backend today. Tables were restructured and now will better reflect how react-ace.

- Scaffolded out new snippet component, basic scoffold but now have something for creating new snippets.
- Other tweaks:
  - Fixed `BottomNav`.
    - Settings now pulls right, there was an uneeded `display: "flex"` line left over, overiding `pullRight` attribute.
    - Added a location to add project/account settings to live. Accessed when setting is clicked.

#### Current Challenges:

> 1. Connecting snippets is cuasing a render error. I believe I need to convert components to load asynchronously. Redux state is updating after the component auctully loads causing the error.
>    1. This seems to be happening aswell with the initialvalue portion of the code editor.
> 2. Still having the login issue with it taking a couple of clicks to load, might want to review how state is handled.
> 3. On initial login, the wrong component appears. It renders an empty project view, where it should render the home screen.
>
> #####  Follow up:
>
> ​	*USE EFFECT* that I need to review. Pretty sure I can improve my other code and fix the bugs if better understand how to use it and where to use it.

---

### <a name="feb3">February 3rd 2021</a>:

#### What was done.

- Began incorporating `react-ace`.
  - Displays a code editor.
  - Above said code editor, there is a menu with two drop down menus:
    - Themes: Will allows user to select what the color scheme they wishes to view the code/text in.
    - Editor Mode: Will allow user to set what is the appropriate syntaxing is needed for the code, ie: 
      - JavaScript
      - Python
      - Java
      - Plain Text
        - Theres more now.
  - Figured out how to create code highlights, then implemented. Reference my experiment/reseach to see how I got there.
    - From `react-ace`, `onSelectionChange`: it grab the start and end points of the selection.
    - This will then update a state object, that will dictate `react-ace`, to place a `marker` on it.
      - `marker`: its a property of react-ace, it can take an array of objects.
  - There is a menu option above the code-editor, + Set Snippet , this will pop up a `Modal` from `rsuite` and will let the user style, name, and describe the highlighted code. 
- Snippet Pane:
  - Built basic components out, now displays:
    - Code/Snippet Title
      - Description section for entirety of code.
    - Snippet Section.
      - Built Snippet Card:
        - Title of snippet.
        - Description for said snippet.
- <span style="color:red">Current Bugs, some on back burner</span>
  - *Login takes two clicks to function --> should work on one.*
    - Might be in need of async functionality or move fetch call seperate from login function.
  - *On dashboard:*
    - Defaults to empty pane when it should default to the home pane.
      - The if/else turnery function might be the issue:
        - Reset the criteria from, if not home to if not Integer.
        - The home pane should be the only time a string is used to dictate what is displayed. All the rest are the `project_id` redux-state object.

> **Testing/Experimenting:**
>
> ​	Right now I am playing around with react-ace; console.logging the inputs and messing with the properties dictated in the documentation found on their [git-hub repo](https://github.com/securingsincity/react-ace/blob/master/docs/Ace.md). 
>
> What I need to know.
>
>  1. How does this custom textEditor/form return its values.
>
>  2. How can I break this into usable information.
>
>      	1. How does my database need to structure in/out data here.
>      	2. How do I load pre-existing code.
>      	3. Is there a way for me to point to specific lines of code.
>
>  3. **Not priority but curious:**
>
>      	1. Can I set up a file upload to autopopulate the editor?
>      	2. Can I create a download to so useres can incorporate changes made here to their code.
>
>     ##### For now, the use will be just to copy and paste. Let's get functionality first then move to convenience. 
>
> Once I figure these things, I believe I should be able to complete MVP. At which point I can go from feature creation to refinement and code clean up.
>
> Resources Found: 
>
> ​	[Ace's official documantion....  I think](https://ace.c9.io/#nav=api&api=selection)

#### What needs to be done

> I have largely scaffolded out the code editor and snippet creation. Also started to scaffold the snippet pane itself.
>
> 1. Need to fix color picker.
>
> 2. On the back-end:
>
>    1. Change Lines/Snippet tables, the way I envisioned their relationship is overly complicated. And now knowing how I can work with react-ace I can simplify its function.
>       1. Lines will be renamed to "raw-input".
>       2. Snippets will know contain their start and end points they refer too.
>
>    2. Next I need to update seed data to match the new database structure.
>    3. Create routes to pull *"Raw-Code"* and *"Snippets"*
>
> 3. Then I will need to build the connection to the front-end, and update redux reducer accordingly.
>
> 4. Flesh out input/change forms. Figure out how I want to structure code being sent back to the backend.
>
> 5. Finally I need to move onto creating routes and models to uploading new information to the backend.

---

### <a name="feb1">February 1st 2021</a>:

#### What was done:

- Began Scaffold of Project Pages.
  - Scaffoled out segment navigation.
    - on load it will call the `fetchCodeSection(u_name, name , project)`.
    - This will fill out the relevant code section.
    - I had to tweak the first navigation pane to get components to render correctly.
      - Redux will not refresh components on change, I decided to simply add a state variable in the parent component that will update with the redux change as needed.
        - There may be cleaner solutions, but for what was needed this was quick and works reliably.
  - Extended Redux:
    - Action: `fetchCodeSection(username, user_id, project_id)`:
      - Takes three arguments used to point to what section in the database we are querying.
    - Action Types:
      - `FETCH_SECTIONS_START`: Called on start of fetch.
      - `FETCH_SECTIONS_SUCCESS`: Called when fetch succeeded.
      - `FETCH_SECTIONS_FAIL`: Called if fetch fails.
    - State: this fetch call will store in `...state, projects_data[ sections:[]]`.

#### Research for next step:

> ​	The next step will be the next challenge. The next step will be to build out the code input form. Idealy I would like this to be repgresented like it would in vs-code or any other editor, syntax and all. Code editors often count and mark out their lines. I believe this will prove valuable in handling the data here.
>
> [Medium Tutorial](https://medium.com/@mjberman024/embedding-a-code-editor-in-your-website-using-react-ace-42e64a58507): This tutorial goes over using <u>React-Ace</u>. I believe this react-library will get me to my goal the quickest.
>
> ​	After this I will need to read up on how to create right click context menu's. I would like to use those to implement assigning snippets to code.
>
> [Plural Sight Article](https://www.pluralsight.com/guides/how-to-create-a-right-click-menu-using-react)

#### Experiment Notes:

> <u>Handling Selection:</u>
>
> ​	The documentation says to use `onCursorChange` or `onSelectionChange`.
>
> : `onCursorChange` :
>
> ​	1. So far I see no difference between this and `onSelectionChange`. If that is the case I'll use `onSelectionChange` simply because the name better represents what I want to happen.
>
> : `onSelectionChange` : 
>
>  	1. Returns a large object of information relevant to the selection.
>       	1. I see within the log, there is a row/column value this might be how I can go about pointing to snippet data.
>
> 2. It can get a bit overwhelming using this option, but it might be more responsive to interaction.
>    1. When Logging I am bombarding with each bit of selection.
>    2. It may be better to just have code stored in a single item on the `code_tabe` on the backend.
>       1. Looks like ace will note rows and columns, I could attach that information to the `snippet_table`. Hopefully this will also simplify how it is currently done, and make connections between them much easier, let ace handle the code and I just work off of it.
>    3. I see a cursor object and an anchor object, I think this Is where I can find where the selection starts and ends. Another end point might be the "lead" value.
>
> : `markers`:
>
> 1. This will take an object.
>
> ```javascript
> const exampleMarkerObject = [{
> 	startRow: 0,
>   startCol: 3,
>   endRow: 3,
>   endCol: 20,
>   className:"SampleCSSClassName"
> }]
> ```
>
> 2. This is how I will be able to display connections between snippets and their code piece counter part.

---

### <a name="jan31">January 31st 2021</a>:

- Fixed minor misbehavior between long and dashboard routing.

  - Token was not reliably being set into local storage, moved functionality a level up and now works consistently.
  - May need to convert to an `async` function, to ensure login always works on first click.

- Redux:

  - Actions:

    - `fetchProjects(user_name, user_id)`:  This action takes two arguments, these are used to assemble together a url to call towards the backend, and will return all the projects related to said account.

      _Relevant actionTypes:_

      - `FETCH_PROJECTS_START`: call on start of fetch.
      - `FETCH_PROJECTS_SUCCESS`: call on successfull finish of fetch.
      - `FETCH_PROJECTS_FAIL`: call on failed fetch.

    - `setCurrentPanel(destination_panel)`: This action is to manage which pannel is in view. Takes one argument, a string, and will update the state to that view.

      _Relevant actionTypes:_

      - `SET_CURRENT_PANEL`: for when a panel needs to be changed.

  - Reducer Update:

    - `projects_data:{ projects:[] }`: stores project data, should stay static mostly after fetch. 
      - _Will need to change on project creation or deletion_
    - `application_state:{ currentPanel: "home" }`: stores what is the current position of the application.

  - Connected Components:

    - `loginForm`: connected to user_data.
    - `leftNav`: connected to `fetchProjects() --> action`, `projects:[] -->"state"`.
    - `home`: connected to `projects:[] --> "state"`.

- Other Changes.
  - Split up `home` component to `home`, `projectTable`,and `homeStyles.js --> mutliple exported objects`.
    - `home`: aggrigates the other two components also build the project overview on the right.
    - `projectTable`: not fully set up, but will display latest changes made to all projects.
    - `homeStyles.js`: this contains all the style objects for the components and relative to the `home` component. 



---

### <a name="jan30">January 30th 2021</a>:

- Built Out Authentication.
  - Users can now login, and recieve a session token which is set to the browsers Header.
  - <span style="color:red"> TBD: This is all it does, to keep development simple, I will lock other pages when base structure is complete. But components needed are at the ready.</span>
- Created Basic Routes between Login and Protected Routes.
  - There is a `"/login"` route and a `"/dashboard"`.
    - <span style="color:red">I would like to add a landing page at `"/landing"`.</span>
- Built NavBar Menus: Left & Bottom.
  - This is a basic scaffold, and buttons are styled but yet made functional, work on backend required.
- Scaffolded out Home page dashboard.
  - Basic scaffold, same as bars and navigation, models now need to be created for collecting user imformation. 

### <a name="jan26">January 26th 2021</a>:

1. Began building out user Login and Register page.
    		1. Forms can collect user inpute and stores the information within `loginDetails` and `setLoginDetails` state variables.
      2. Minor form validation was created. 
              	1. Signup form infromation has character limits and required.
      3. Implemented an Overlay for when a new user wishes to register a new account.
2. Previous batabase is buing built in conjuction with the front end, it has partial encryption settup and a base database with seed data created.

> Lesson from previouse project: I had begun my trelloClone project with my focus on the front-end and figured I would attach it to backend after the fact. <u>This was a mistake</u> and found myself lost; this time I will work with both at the same time. The hope is that by working with both I can ensure that the solutions I come up with for the front end are easily compatible with the back. With the trelloClone project, the way I managed my state would require me to create some sort of object parse and slicer for both the back-end and front-end to make it work. This cost overall project efficiency and also simply just made my brain hurt. I decided to call that one complete, my goal was to learn how to use ReactDND and in that I succeeded.

##### Challenge:

​	When working with both 'RSuite' and React-Hook-Form, I noticed that state was not being set, or atleast kept logging as undefined. Both tools provide means for form management, and I prefer React-Hook-Form. To overcome this I have created styles in css to match that of RSuite. This way I can use React-Hook-Form on its own with out having any issues.



---

| Tools Used:    | Color Palette        |
| -------------- | -------------------- |
| React          | Blue: `#407BC4`      |
| Redux          | Off-White: `#FFFFF7` |
| ReactFormHooks |                      |
| Rsuite         |                      |
| Axios          |                      |
| React-Ace      |                      |

