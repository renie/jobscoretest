import Ajax from 'ajax-abstraction'
import Jaiminho from 'jaiminho';
import Utils from '../Utils/Utils';
import Keys from '../Utils/keys.json';

class EntityList {
	constructor() {
		this._list		= [];
		this.Jaiminho	= new Jaiminho();
	}

	get list() {
		return this._list;
	}

	set list(newList) {
		this._list = newList;

		return this;
	}

	get entity() {
		return this._entity;
	}

	set entity(newEntity) {
		this._entity = newEntity;

		return this;
	}

	buildAPIURL() {
		return Keys.API_URL + this._entity.endpoint;
	}

	parseResult(result) {
		return result.map((item) => new this._entity(item));
	}

	getEntities(callback) {
		Ajax.call({
			method: 'GET',
			url: this.buildAPIURL(),
			contentType: 'application/json',
			headers: {
				'Authorization' : 'Token token=' + Keys.API_KEY
			},
			success: (resData) => {
				this._list = this.parseResult(resData.data);

				if (callback)
					callback(this._list);
			},
			fail: (req) => {
				if (callback)
					callback(null, Utils.handleXHRErrors(req));
			}
		});

		return this;
	}
}

export default EntityList;
