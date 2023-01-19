import { mixinBehaviors } from '../@polymer/polymer/lib/legacy/class.js';
import { PolymerElement, html } from '../@polymer/polymer/polymer-element.js';
import { TriPlatViewBehavior } from "../triplat-view-behavior/triplat-view-behavior.js";
import { TriPlatDs } from "../triplat-ds/triplat-ds.js";
import "../triblock-table/triblock-table.js";
import "../triplat-query/triplat-query.js";

class PolymerApp extends mixinBehaviors([TriPlatViewBehavior], PolymerElement) {
	static get template() {
		return html `
			<style include="tristyles-theme">

		
				.main {
					@apply --layout-horizontal;
					@apply --layout-center-justified;
				}

			</style>

			<triplat-ds id="employees" name="employeeDS" data="{{data}}">
			</triplat-ds>

			<triplat-query data="{{data}}" filtered-data-out="{{filteredData}}">
				<triplat-query-sort desc="[[sortDescending]]" name="[[sortProperty]]"></triplat-query-sort>
			</triplat-query>

			<triblock-table data="{{filteredData}}" sort-property="{{sortProperty}}" sort-descending="{{sortDescending}}">
				<triblock-table-column title="ID" property="_id"></triblock-table-column>
				<triblock-table-column title="Name" property="lastName" sortable>
					<template>
						<div>{{item.lastName}}, {{item.firstName}}</div>
					</template>
				</triblock-table-column>
		  	</triblock-table>
	

		`;
	}

	static get properties() {
		return {

		}
	}
}

window.customElements.define('polymer-app', PolymerApp);