# Startup
This is a startup idea by Jacobtleavitt1 proctected by license. See "LICENSE" for more information.

## Elevator Pitch
Did you know that over 98% of employees want to work from home but only 13% actually do. This is because employers don't trust that wfh employees will acomplish the same as traditional employees and employees don't like software that monitors their home computer. This startup will create a program that allows employees to self-report what they will acomplish each day so employers can see what they are working on and verify their progress without using intrusive software.

## Key Features
- User can log in and log out.
- User can add tasks to the calendar which will be saved in the database.
- User can see messages from employeer regarding work.
- User can download tasks to a web calendar for ease of use.

> 98% of employees want to work from home  
> forbs.com

The key features of the site will allow employees and employers to create a type of informal "contract" each day of tasks that need to be completed. This will allow employees to feel the freedom of working from home while providing the employer with reasonable assurance of the employee's work.

### Program layout sketch
![Program layout sketch](https://github.com/Jacobtleavitt1/startup/assets/112529618/0faf5847-1cd4-42bb-8506-bcd1794f1bd9)

## Technologies
**Authentication:** Users will log in and their name will be displayed on the main page.  
**Database data:** Lists of tasks for each day will be stored in a database.  
**WebSocket data:** Real time messages recived from employer about the employees tasks.  
**Service:** A service to download tasks to a web calendar will be provided for cross-platform use.  

### Technologies List
- HTML - Website structure
- CSS - Hot, chic, edgy style and design
- JavaScript - Calendar on web that you can add tasks to.
- Service - Calendar web service to download tasks to calendar.
- Database/Login - Employee will log in.
- WebSocket - Messages from employer
- React - Web framework

## Deliverables
**HTML:** Added html pages for the user login, the schedule page that contains most of the site's 
functionality, and the site about information. *Note I have already started doing the css assignment so my site may 
look like some css is already done.

| Requirement                       | Status   | Expected Grade | Notes                                                                          |
|-----------------------------------|----------|----------------|--------------------------------------------------------------------------------|
| Simon HTML deployed               | Complete | (Prerequisite) |                                                                                |
| GitHub Repository link            | Complete | (Prerequisite) | See website footer                                                             |
| README.md documentation           | Complete | (Prerequisite) | You're looking at it                                                           |
| At least 10 Git commits           | Complete | (Prerequisite) |                                                                                |
| HTML pages                        | Complete | 20/20 (100%)   | 3/3 main pages complete and 1 minor page you can link to from another location |
| Proper use of HTML tags           | Complete | 10/10 (100%)   | I use footer, nav, body, main, header, table, and many more.       |
| Links between pages               | Complete | 10/10 (100%)   | You can use header links to get to pages                                       |
| Application textual content       | Complete | 10/10 (100%)   |                                                                                |
| Placeholder for 3rd party service | Complete | 10/10 (100%)   | See "save to calendar" link on schedule.html                                   |
| Application images                | Complete | 10/10 (100%)   | Image on about page                                                            |
| Login placeholder                 | Complete | 10/10 (100%)   | See index.html                                                                 |
| Database data placeholder         | Complete | 10/10 (100%)   | Database will store data in schedule on schedule.html page                     |
| WebSocket data placeholder        | Complete | 10/10 (100%)   | See notes from boss on schedule.html                                           |
| TOTAL SCORE                       |          | 100/100 (100%) |                                                                                |

**CSS:** Added three css style sheets that corrispond to three distinct website styles: light, dark, and matrix.
| Requirement                     | Status   | Expected Grade | Notes                                                                      |
|---------------------------------|----------|----------------|----------------------------------------------------------------------------|
| Simon CSS deployed              | Complete | (Prerequisite) |                                                                            |
| GitHub Repository link          | Complete | (Prerequisite) | See website footer                                                         |
| README.md documentation         | Complete | (Prerequisite) | You're looking at it                                                       |
| At least 10 Git commits         | Complete | (Prerequisite) | Note I have been working on CSS for a few weeks (even before HTML was due) |
| Header, footer, and main styled | Complete | 30/30 (100%)   |                                                                            |
| Navigation elements             | Complete | 20/20 (100%)   | See navigation bar in header                                               |
| Responsive to window resizing   | Complete | 10/10 (100%)   |                                                                            |
| Application elements            | Complete | 20/20 (100%)   | See schedule.html                                                          |
| Application text content        | Complete | 10/10 (100%)   |                                                                            |
| Application images              | Complete | 10/10 (100%)   | See about.html                                                             |
| TOTAL SCORE                     |          | 100/100 (100%) |                                                                            |

**JavaScript:** Implamented JavaScript to preform website functions at a superficial level.
| Requirement               | Status   | Expected Grade | Notes                                                                |
|---------------------------|----------|----------------|----------------------------------------------------------------------|
| Simon JavaScript deployed | Complete | (Prerequisite) |                                                                      |
| GitHub Repository link    | Complete | (Prerequisite) | See footer.                                                          |
| README.md documentation   | Complete | (Prerequisite) | You're lookin' at it.                                                |
| At least 10 Git commits   | Complete | (Prerequisite) |                                                                      |
| Login JavaScript          | Complete | 20/20 (100%)   | See index.html.                                                      |
| Database JavaScript       | Complete | 20/20 (100%)   | See "Schedule" on schedule.html.                                     |
| WebSocket JavaScript      | Complete | 20/20 (100%)   | See "Messages from Boss" on schedule.html.                           |
| Interaction JavaScript    | Complete | 40/40 (100%)   | See settings "⚙" at top, on far right of navigation bar on any page. |
| TOTAL SCORE               |          | 100/100 (100%) |                                                                      |

**Web Service:** Used external service to put quotes on the website. Now frontend calls server to update the schedule or add a user.
| Requirement               | Status   | Expected Grade | Notes                                                           |
|---------------------------|----------|----------------|-----------------------------------------------------------------|
| Simon service deployed    | Complete | (Prerequisite) |                                                                 |
| GitHub Repository link    | Complete | (Prerequisite) | See footer.                                                     |
| README.md documentation   | Complete | (Prerequisite) | You're lookin' at it.                                           |
| At least 10 Git commits   | Complete | (Prerequisite) |                                                                 |
| HTTP service              | Complete | 40/40 (100%)   | See index.js.                                                   |
| Express static middleware | Complete | 10/10 (100%)   | See index.js.                                                   |
| Frontend calls service    | Complete | 20/20 (100%)   | See schedule.js and quotes under the schedule on schedule.html. |
| Backend service endpoints | Complete | 20/20 (100%)   | See index.js.                                                   |
| Frontend calls my service | Complete | 20/20 (100%)   | See schedule on schedule.html and schedule.js.                  |
| TOTAL SCORE               |          | 100/100 (100%) |                                                                 |

**Login:** Implamented a database that stores and retrieves site data. Also implamented a standard login and registration system. If you do not have an account on sign in the system automatically creates one for you.
| Requirement             | Status   | Expected Grade | Notes                                                               |
|-------------------------|----------|----------------|---------------------------------------------------------------------|
| Simon login deployed    | Complete | (Prerequisite) |                                                                     |
| GitHub Repository link  | Complete | (Prerequisite) | See footer.                                                         |
| README.md documentation | Complete | (Prerequisite) | You're lookin' at it.                                               |
| At least 10 Git commits | Complete | (Prerequisite) |                                                                     |
| New user registration   | Complete | 20/20 (100%)   | A new user is registered if the system does not find them on login. |
| User authentication     | Complete | 20/20 (100%)   | An existing user can login.                                         |
| Stores data in database | Complete | 20/20 (100%)   | Stores application data in MongoDB.                                 |
| Stores credentials      | Complete | 20/20 (100%)   | Stores and retrieves credentials in MongoDB.                        |
| Restricted usability    | Complete | 20/20 (100%)   | Unauthenticated users can only see the login and about pages.       |
| TOTAL SCORE             |          | 100/100 (100%) |                                                                     |

**Websocket:** 
| Requirement             | Status   | Expected Grade | Notes                 |
|-------------------------|----------|----------------|-----------------------|
| Simon login deployed    | Complete | (Prerequisite) |                       |
| GitHub Repository link  | Complete | (Prerequisite) | See footer.           |
| README.md documentation | Complete | (Prerequisite) | You're lookin' at it. |
| At least 10 Git commits | Complete | (Prerequisite) |                       |
| Backend listens         | Complete | 20/20 (100%)   | See peerProxy.js:59.  |
| Frontend connects       | Complete | 20/20 (100%)   | See main.js:19.       |
| Websocket used          | Complete | 30/30 (100%)   | See peerProxy.js:6.   |
| Data displayed          | Complete | 30/30 (100%)   | See schedule.html.    |
| TOTAL SCORE             |          | 100/100 (100%) |                       |