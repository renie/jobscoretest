import Ajax from 'ajax-abstraction'
import Jaiminho from 'jaiminho';
import Utils from '../Utils/Utils';
import Keys from '../Utils/keys.json';

class EntityList {
	constructor() {
		this._list = [];

		this.Jaiminho = new Jaiminho();
	}

	get list() {
		return this._list;
	}

	set list(newList) {
		this._list = newList;
	}

	getEntities(callback) {
		Ajax.call({
			method: 'GET',
			url: Keys.API_URL + this._entity.endpoint,
			contentType: 'application/json',
			headers: {
				'Authorization' : 'Token token=' + Keys.API_KEY
			},
			success: (resData) => {
				var entities = resData.data.map((item) => {
					let entities = new this._entity(item);
					return entities;
				});

				this._list = entities;

				this.Jaiminho.trigger('js', 'updatelist', {
					listType: this._entity.endpoint,
					list: entities
				});

				if (callback)
					callback(entities);
			},
			fail: (req) => {
				if (callback)
					callback(null, Utils.handleXHRErrors(req));
			}
		});

	}
}

export default EntityList;
