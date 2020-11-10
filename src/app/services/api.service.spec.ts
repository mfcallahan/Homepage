import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

describe('ApiService', () => {
  const testUrl = 'https://foo.bar/baz';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should create ApiService', () => {
    const service: ApiService = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  });

  it('should execute GET request', inject(
    // Inject HttpTestingController to create a mock httpClient instance
    [HttpTestingController, ApiService],
    (httpMock: HttpTestingController, apiService: ApiService) => {
      const testParams = new HttpParams().set('foo', 'bar').set('baz', 'qux');
      const testHeaders = new HttpHeaders().set('x-foo-bar', 'baz');
      const mockResponse = {
        foo: 'bar',
        baz: 100,
        qux: [
          {
            blah: 1,
            corge: 'zjZ16',
          },
          {
            blah: 2,
            corge: 'AXVcw',
          },
        ],
      };

      apiService.get(testUrl, testParams, testHeaders).subscribe((response) => {
        expect(response).toBe(mockResponse);
      });

      // create a request using the mock HttpClient client, calling the testUrl with testParams
      const req = httpMock.expectOne([testUrl, testParams.toString()].join('?'));

      // Expect the request made by the mock HttpClient client to be a GET request
      expect(req.request.method).toEqual('GET');

      // Set mockResponse to be returned by the request
      req.flush(mockResponse);
    }
  ));
});
