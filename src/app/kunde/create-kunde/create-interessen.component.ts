/*
 * Copyright (C) 2015 - present Juergen Zimmermann, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Kunde, KundeService, UpdateError } from '../shared';

import { HOME_PATH } from 'src/app/shared';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router'; // eslint-disable-line @typescript-eslint/consistent-type-imports
import { first } from 'rxjs/operators';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-interessen</code>
 */
@Component({
    selector: 'hs-create-interessen',
    templateUrl: './create-interessen.component.html',
    styleUrls: ['./create-interessen.component.scss'],
})
export class CreateInteressenComponent implements OnInit {
    @Input()
    form!: FormGroup;

    readonly sport = new FormControl(false);

    readonly lesen = new FormControl(false);

    readonly reisen = new FormControl(false);

    /**
     * Das Formular als Gruppe von Controls initialisieren und mit den
     * Interessenn des zu &auml;ndernden Kundes vorbelegen.
     */
    ngOnInit() {
        this.form.addControl('sport', this.sport);
        this.form.addControl('lesen', this.lesen);
        this.form.addControl('reisen', this.reisen);
    }
}
