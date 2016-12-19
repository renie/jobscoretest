import Entity from '../Entity';

class Job extends Entity{
	static get endpoint() {
		return 'jobs';
	}

	get endpoint() {
		return Job.endpoint;		
	}
}

export default Job;
