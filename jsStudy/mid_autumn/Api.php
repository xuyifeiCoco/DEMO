<?php

use Service\RequestUtil;

class Api
{
    private $jsapi = null;

    public function __construct()
    {
        $this->jsapi = new JsApiPay;
    }

    public function ActionParticipate($params)
    {
        if (!isset($params['user_id'])) {
            return $this->responseError(-1, '缺少参数');
        }
        $res = RequestUtil::request(RequestUtil::MS_ACTIVITY, '/mid-autumn/user', 'POST', $params, 10001, function ($code, $msg) {
            return $this->responseError($code, $msg );
        });
        return $this->responseSucc($res);
    }

    public function ActionStatistics($params)
    {
        $res = RequestUtil::request(RequestUtil::MS_ACTIVITY, '/mid-autumn/statistics', 'GET', [], 10001, function ($code, $msg) {
            return $this->responseError($code, $msg );
        });
        return $this->responseSucc($res);
    }

    public function ActionBullets($params)
    {
        $userId = isset($params['user_id']) ? $params['user_id'] : 0;
        $size = isset($params['size']) ? $params['size'] : 6;
        $res = RequestUtil::request(RequestUtil::MS_ACTIVITY, '/mid-autumn/bullets/' . $userId, 'GET', ['size' => $size], 10001, function ($code, $msg) {
            return $this->responseError($code, $msg );
        });
        return $this->responseSucc($res);
    }

    public function ActionCurrentMission($params)
    {
        $res = RequestUtil::request(RequestUtil::MS_ACTIVITY, '/mid-autumn/current-mission', 'POST', $params, 10001, function ($code, $msg) {
            return $this->responseError($code, $msg );
        });
        return $this->responseSucc($res);
    }

    public function ActionNewMission($params)
    {
        $res = RequestUtil::request(RequestUtil::MS_ACTIVITY, '/mid-autumn/new-mission', 'POST', $params, 10001, function ($code, $msg) {
            return $this->responseError($code, $msg );
        });
        return $this->responseSucc($res);
    }

    public function ActionReward($params)
    {
        $res = RequestUtil::request(RequestUtil::MS_ACTIVITY, '/mid-autumn/reward', 'POST', $params, 10001, function ($code, $msg) {
            return $this->responseError($code, $msg );
        });
        return $this->responseSucc($res);
    }

    public function ActionShareParams($params)
    {
        $redis = utils::redisConnect();
        $signArr = wechat::getSign($redis, $params['url']);
        $signArr['appid'] = wechat::getAPPID();

        $data = [
            'appid' => wechat::getAPPID(),
            'noncestr' => $signArr['noncestr'],
            'timestamp' => $signArr['timestamp'],
            'signature' => $signArr['sign'],
        ];

        return $this->responseSucc($data);
    }

    public function responseSucc($data)
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE,PATCH");
        header('Content-Type:application/json; charset=utf-8');
        $retData = [
            'code' => 0,
            'msg' => 'succ',
            'data' => $data,
        ];
        echo json_encode($retData);
        exit();
    }

    public function responseError($code=-1, $data=[], $msg='')
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE,PATCH");
        header('Content-Type:application/json; charset=utf-8');
        $retData = [
            'code' => $code,
            'msg' => $msg ? $msg : 'fail',
            'data' => $data,
        ];
        echo json_encode($retData);
        exit();
    }
}

