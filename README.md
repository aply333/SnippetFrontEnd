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
4. [February 1st][#feb1]  : Scaffold Projects and extended redux state.

---

### <a name="feb1">February 1st 2021</a>:

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
- Research for next step:

> ​	The next step will be the next challenge. The next step will be to build out the code input form. Idealy I would like this to be repgresented like it would in vs-code or any other editor, syntax and all. Code editors often count and mark out their lines. I believe this will prove valuable in handling the data here.
>
> [Medium Tutorial](https://medium.com/@mjberman024/embedding-a-code-editor-in-your-website-using-react-ace-42e64a58507): This tutorial goes over using <u>React-Ace</u>. I believe this react-library will get me to my goal the quickest.
>
> ​	After this I will need to read up on how to create right click context menu's. I would like to use those to implement assigning snippets to code.
>
> [Plural Sight Article](https://www.pluralsight.com/guides/how-to-create-a-right-click-menu-using-react)

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

