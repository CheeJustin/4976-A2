﻿(function () {

    var app = angular.module("reportModule", []);

    var ReportController = function ($scope, $http) {

        $http.get("../api/ClientAPI/ReportLogin") // will be changed to http://a3.thedistantvoice.me/api/ClientAPI/ReportLogin in the future..?
        .success(function (response) {
            if (response == "true") {
                $scope.report = response;
                $scope.showLogin = false;
                $scope.showReport = true;
            } else {
                $scope.showLogin = true;
                $scope.showReport = false;
            }
        })

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        $scope.currentDate = mm + '/' + dd + '/' + yyyy;

        var _year = {
            FiscalYearId: 0,
            FiscalYear: "Loading..."
        };
        $scope.years = [_year];

        var report = {
            statusOpen: "--",
            statusClosed: "--",
            statusReopened: "--",
            programCrisis: "--",
            programCourt: "--",
            programSMART: "--",
            programDVU: "--",
            programMCFD: "--",
            genderFemale: "--",
            genderMale: "--",
            genderTrans: "--",
            ageAdult: "--",
            ageYouth2: "--",
            ageYouth1: "--",
            ageChild: "--",
            ageSenior: "--"
        }
        $scope.report = report;

        // Grabs the fiscal years from the database
        $http.get("../api/FiscalYearAPI") // will be changed to http://a3.thedistantvoice.me/api/FiscalYearAPI in the future..?
        .success(function (response) {
            $scope.years = response;
        });

        $scope.getReport = function () {
            $http.get("../api/ClientAPI/GetReport/" + $scope.select.month + "/" + $scope.select.year) // will be changed to http://a3.thedistantvoice.me/api/ClientAPI/GetReport/ in the future..?
            .success(function (response) {
                $scope.report = response;
            })
            .error(function (response) {
                alert("ERROR");
            });
        }

        $scope.login = function () {
            var data = "grant_type=password&" + "username=" + $scope.login.email + "&password=" + $scope.login.password;

            $http.post("http://localhost:51461/Token", data, {
                headers:
            { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function (response) {

                $http.get("../api/ClientAPI/ReportLogin") // will be changed to http://a3.thedistantvoice.me/api/ClientAPI/ReportLogin in the future..?
                .success(function (response) {
                    if (response == "true") {
                        $scope.report = response;
                        $scope.showLogin = false;
                        $scope.showReport = true;
                    } else {
                        $scope.loginError = "User is not authorized to view this page."
                    }
                })
                .error(function (response) {
                    $scope.loginError = "User is not authorized to view this page."
                });

            }).error(function (error) {
                $scope.loginError = "Invalid login attempt."
            });
        }
    };

    app.controller("ReportController", ["$scope", "$http", ReportController]);

}());