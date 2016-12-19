import Job from './Job';
import EntityList from '../EntityList';

class JobList extends EntityList {
	constructor() {
		super();
		this._entity = Job;
	}

	getJobs(fn) {
		this.getEntities(fn);
	}
}

export default JobList;
