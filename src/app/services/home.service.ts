import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public alertService: AlertService) {}

  /**
   * Get all categories from backend.
   */
  getNews(): Observable<any> {
    return of([
      {
          "id": 11,
          "date": "2019-03-09T01:12:31",
          "date_gmt": "2019-03-09T00:12:31",
          "guid": {
              "rendered": "https://campusfest-wp.test/?p=11"
          },
          "modified": "2019-03-09T01:12:37",
          "modified_gmt": "2019-03-09T00:12:37",
          "slug": "schoen-wars",
          "status": "publish",
          "type": "post",
          "link": "https://campusfest-wp.test/?p=11",
          "title": {
              "rendered": "Schön wars!"
          },
          "content": {
              "rendered": "\n<p>Danke an alle, kommts guder heim.</p>\n",
              "protected": false
          },
          "excerpt": {
              "rendered": "Danke an alle, kommts guder heim.",
              "protected": false
          },
          "author": 1,
          "featured_media": 0,
          "comment_status": "open",
          "ping_status": "open",
          "sticky": false,
          "template": "",
          "format": "standard",
          "meta": [],
          "categories": [
              2
          ],
          "tags": [],
          "_links": {
              "self": [
                  {
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/posts/11"
                  }
              ],
              "collection": [
                  {
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/posts"
                  }
              ],
              "about": [
                  {
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/types/post"
                  }
              ],
              "author": [
                  {
                      "embeddable": true,
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/users/1"
                  }
              ],
              "replies": [
                  {
                      "embeddable": true,
                      "href": "https://campusfest-wp.test/index.php?rest_route=%2Fwp%2Fv2%2Fcomments&post=11"
                  }
              ],
              "version-history": [
                  {
                      "count": 1,
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/posts/11/revisions"
                  }
              ],
              "predecessor-version": [
                  {
                      "id": 12,
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/posts/11/revisions/12"
                  }
              ],
              "wp:attachment": [
                  {
                      "href": "https://campusfest-wp.test/index.php?rest_route=%2Fwp%2Fv2%2Fmedia&parent=11"
                  }
              ],
              "wp:term": [
                  {
                      "taxonomy": "category",
                      "embeddable": true,
                      "href": "https://campusfest-wp.test/index.php?rest_route=%2Fwp%2Fv2%2Fcategories&post=11"
                  },
                  {
                      "taxonomy": "post_tag",
                      "embeddable": true,
                      "href": "https://campusfest-wp.test/index.php?rest_route=%2Fwp%2Fv2%2Ftags&post=11"
                  }
              ],
              "curies": [
                  {
                      "name": "wp",
                      "href": "https://api.w.org/{rel}",
                      "templated": true
                  }
              ]
          }
      },
      {
          "id": 9,
          "date": "2019-03-09T01:11:56",
          "date_gmt": "2019-03-09T00:11:56",
          "guid": {
              "rendered": "https://campusfest-wp.test/?p=9"
          },
          "modified": "2019-03-09T01:12:08",
          "modified_gmt": "2019-03-09T00:12:08",
          "slug": "die-campusblosn-eroeffnet-das-campusfest",
          "status": "publish",
          "type": "post",
          "link": "https://campusfest-wp.test/?p=9",
          "title": {
              "rendered": "Die Campusblosn eröffnet das Campusfest!"
          },
          "content": {
              "rendered": "\n<p>Wie jedes Jahr hat die Campusblosn das Campusfest eröffnet!</p>\n",
              "protected": false
          },
          "excerpt": {
              "rendered": "Wie jedes Jahr hat die Campusblosn das Campusfest eröffnet!",
              "protected": false
          },
          "author": 1,
          "featured_media": 0,
          "comment_status": "open",
          "ping_status": "open",
          "sticky": false,
          "template": "",
          "format": "standard",
          "meta": [],
          "categories": [
              2
          ],
          "tags": [],
          "_links": {
              "self": [
                  {
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/posts/9"
                  }
              ],
              "collection": [
                  {
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/posts"
                  }
              ],
              "about": [
                  {
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/types/post"
                  }
              ],
              "author": [
                  {
                      "embeddable": true,
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/users/1"
                  }
              ],
              "replies": [
                  {
                      "embeddable": true,
                      "href": "https://campusfest-wp.test/index.php?rest_route=%2Fwp%2Fv2%2Fcomments&post=9"
                  }
              ],
              "version-history": [
                  {
                      "count": 1,
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/posts/9/revisions"
                  }
              ],
              "predecessor-version": [
                  {
                      "id": 10,
                      "href": "https://campusfest-wp.test/index.php?rest_route=/wp/v2/posts/9/revisions/10"
                  }
              ],
              "wp:attachment": [
                  {
                      "href": "https://campusfest-wp.test/index.php?rest_route=%2Fwp%2Fv2%2Fmedia&parent=9"
                  }
              ],
              "wp:term": [
                  {
                      "taxonomy": "category",
                      "embeddable": true,
                      "href": "https://campusfest-wp.test/index.php?rest_route=%2Fwp%2Fv2%2Fcategories&post=9"
                  },
                  {
                      "taxonomy": "post_tag",
                      "embeddable": true,
                      "href": "https://campusfest-wp.test/index.php?rest_route=%2Fwp%2Fv2%2Ftags&post=9"
                  }
              ],
              "curies": [
                  {
                      "name": "wp",
                      "href": "https://api.w.org/{rel}",
                      "templated": true
                  }
              ]
          }
      }
    ]);
  }
  
}
