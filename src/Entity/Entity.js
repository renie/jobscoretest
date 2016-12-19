import Ajax from 'ajax-abstraction';
import Jaiminho from 'jaiminho';
import Keys from '../Utils/keys.json';
import Utils from '../Utils/Utils';

class Entity {
	constructor(data) {
		this.Jaiminho = new Jaiminho();

		if (!data)
			return;

		this.fillWithNewData(data);
	}

	get attributes() {
		return this._attributes;
	}

	get links() {
		return this._links;
	}

	get relationships() {
		return this._relationships;
	}

	get type() {
		return this._type;
	}

	fillWithNewData(newData) {
		this.id				= newData.id;
		this._attributes	= newData.attributes;
		this._links			= newData.links;
		this._relationships = newData.relationships;
		this._type			= newData.type;
	}

	dispatchUpdateEntityEvent(old) {
		this.Jaiminho.trigger('js', 'updateEntity', {
			entityType: this.endpoint,
			oldObject: old,
			newObject: this
		});
	}

	buildAPIURL() {
		return Keys.API_URL + this.endpoint + '/' + this.id;
	}

	dataToSend() {
		let dataToSend = {
			data: {
				type: this.type,
				attributes: this.attributes,
				relationships: {
					location: {
						data: {
							id: "bVuWWGWVCr5PozeMg-44q7",
							type: "location"
						}
					},
					department: {
						data: {
							id: "cXKqBsXl4r5Pe8eMg-44q7",
							type: "department"
						}
					}
				}
			}
		};

		if (this.id)
			dataToSend.data.id = this.id;

		return dataToSend;
	}

	updateData(resdata, callback) {
		let oldthis = JSON.parse(JSON.stringify(this));

		this.fillWithNewData(resdata.data);
		this.dispatchUpdateEntityEvent(oldthis);

		if (callback)
			callback(oldthis, this);
	}

	load(callback) {
		if (!this.id)
			throw new Error('You must set an id to an object before loading it.');

		Ajax.call({
			method: 'GET',
			url: this.buildAPIURL(),
			contentType: 'application/json',
			headers: {
				'Authorization' : 'Token token=' + Keys.API_KEY
			},
			success: (resData) => {
				this.updateData(resData, callback);
			},
			fail: (req) => {
				if (callback)
					callback(null, Utils.handleXHRErrors(req));
			}
		});
	}

	save(callback) {
		let method = !this.id ? 'PUT' : 'POST';
		
		Ajax.call({
			method: method,
			url: this.buildAPIURL(),
			contentType: 'application/vnd.api+json',
			headers: {
				'Authorization' : 'Token token=' + Keys.API_KEY
			},
			data: this.dataToSend,
			success: (resData) => {
				this.updateData(resData, callback);
			},
			fail: (req) => {
				if (callback)
					callback(null, Utils.handleXHRErrors(req));
			}
		});	
	}
}

export default Entity;
