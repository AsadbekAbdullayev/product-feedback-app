import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import './index.css';
import {CategorycontextProvider} from './context/categoryContext'
import {FeedbackContextProvider} from './context/feedbackContext'
import {CommentContextProvider} from './context/commentContext'
import {SetCategorycontextProvider} from './context/setCategory'
import { SortingContextProvider} from './context/sorting'
import Root from './root'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SetCategorycontextProvider>
            <CommentContextProvider>
               <FeedbackContextProvider>
                  <CategorycontextProvider>
                    <SortingContextProvider>
                                        <Root />
                    </SortingContextProvider>
                  </CategorycontextProvider>
               </FeedbackContextProvider>
             </CommentContextProvider>
      </SetCategorycontextProvider>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
