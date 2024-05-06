const express = require('express');
const bodyParser = require('body-parser');

const blogRouter = require('./routers/blog-router.js');
const eventRouter = require('./routers/event-router.js');
const partnerRouter = require('./routers/partner-router.js');
const projectRouter = require('./routers/project-router.js');
const newsRouter = require('./routers/news-router.js');
const jobofferRouter = require('./routers/job-offer-router.js');
const candidatesRouter = require('./routers/candidates-router.js');
const volunteersRouter = require('./routers/volunteer-router.js');
const locationRouter = require('./routers/event-location-router.js');
const fundRouter = require('./routers/funds-router.js');

const jobApplicationRouter = require('./routers/job-application-router.js');
const volParticipationRouter = require('./routers/event-participation-router.js');

const app = express();
const PORT = 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/blogs', blogRouter );
app.use('/events', eventRouter);
app.use('/partners', partnerRouter);
app.use('/projects', projectRouter);
app.use('/news', newsRouter);
app.use('/joboffer', jobofferRouter);
app.use('/cands', candidatesRouter);
app.use('/volunteer', volunteersRouter);
app.use('/locations', locationRouter);
app.use('/funds', fundRouter);

app.use('/jobApplication', jobApplicationRouter);
app.use('/volParticipation', volParticipationRouter);

app.listen(PORT, () => {
    console.log('Server listening on port ${port}');
});