const { body, validationResult } = require('express-validator');

function reqValidation(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

//validators for all routers
const BlogValidation = [ body('blog_title').notEmpty().withMessage('Blog title cannot be empty!'),
body('blog_description').notEmpty().withMessage('Description field cannot be empty!'),
body('blog_author').notEmpty().withMessage('Author field cannot be empty!')];

const CandValidation = [ body('cand_name').notEmpty().withMessage("Candidate's name cannot be empty"),
body('cand_email').notEmpty().withMessage("Candidate's email cannot be empty")]; //zid format invalid

const EventValidation = [ body('event_title').notEmpty().withMessage('Event title cannot be empty!'),
body('date').notEmpty().withMessage('Date field cannot be empty!'),
body('date').isISO8601().withMessage('Invalid date format')];

const CandAppValidation = [ body('cand_name').notEmpty().withMessage("Candidate's name cannot be empty!"),
body('cand_email').isEmail().withMessage('Invalid email format'),
body('resume_path').withMessage('Resume path is required')];

const JobOfferValidation = [body('job_poisition').isEmpty().withMessage('Job name required'),
body('description').isEmpty().withMessage('Description field required')];

const NewsValidation = [ body('news_title').notEmpty().withMessage('News title cannot be empty'),
body('content').notEmpty().withMessage("News description cannot be empty"),
body('news_author').notEmpty().withMessage("News author cannot be empty")];

const PartValidation = [ body('part_name').isEmpty().withMessage("Partner's name cannot be empty"),
body('part_email').optional({ nullable: true}).if(body('part_phone').isEmpty()).notEmpty().withMessage("Either the partner's phone number or email is required"),
body('part_phone').optional({ nullable: true}).if(body('part_email').isEmpty()).notEmpty().withMessage("Either the partner's phone number or email is required")];

const ProjectValidation = [ body('project_name').notEmpty().withMessage('Project title cannot be empty!'),
body('description').notEmpty().withMessage('Description field cannot be empty!'),
body('project_url').notEmpty().withMessage('An image is required!')];

const VolValidation = [ body('vol_name').isEmpty().withMessage("Volunteer's name cannot be empty"),
body('vol_email').optional({ nullable: true}).if(body('vol_phone').isEmpty()).notEmpty().withMessage("Either the volunteer's phone number or email is required"),
body('vol_phone').optional({ nullable: true}).if(body('vol_email').isEmpty()).notEmpty().withMessage("Either the volunteer's phone number or email is required")];

const LocationValidation = [body('location_name').notEmpty().withMessage('Location name cannot be empty')];

const createFundValidation = [ body('amount').notEmpty().withMessage('Amount is required').isNumeric().withMessage('Amount must be only numeric'),
body('description').notEmpty().withMessage('Description field cannot be empty!'),
body('project_id').notEmpty().withMessage('Project id cannot be empty').isInt().withMessage('Project id has to be an integer'),
body('part_id').notEmpty().withMessage('Partner id cannot be empty').isInt().withMessage('Partner id has to be an integer')];
const updateFundValidation = [ body('amount').notEmpty().withMessage('Amount is required').isNumeric().withMessage('Amount must be only numeric'),
body('description').notEmpty().withMessage('Description field cannot be empty!')];

const VolAppValidation = [ body('vol_name').notEmpty().withMessage('Volunteer name is required'),
body('vol_email').isEmail().withMessage('Invalid email address'),
body('vol_phone').isMobilePhone().withMessage('Invalid phone number'),
body('eventId').isInt().withMessage('Invalid event ID')];


module.exports = {
    reqValidation,
    BlogValidation,
    CandValidation,
    EventValidation,
    CandAppValidation,
    JobOfferValidation,
    NewsValidation,
    PartValidation,
    ProjectValidation,
    VolValidation,
    LocationValidation,
    createFundValidation,
    updateFundValidation,
    VolAppValidation
}