<?php
/**
 * Short description for index.php
 *
 * @package          index
 * @author           jujian <jujian@lanjingren.com>
                     2018-07-31 16:40
 * @version          1.0
 * @license          MIT
 */

require_once __DIR__ . '/../../app/Service/RequestUtil.php';
require_once __DIR__ . '/../../vendor/autoload.php';
require_once __DIR__ . '/../../log.php';
require_once __DIR__ . '/../../utils.php';
require_once __DIR__ . '/../../wxpay/lib/WxPay.JsApiPay.php';
require_once __DIR__ . '/../wechat.php';
load_app_config();

$apiClass = ucfirst($pathArr[2]);
$apiFile = __DIR__ . '/' . ucfirst($pathArr[2]) . '.php';

if (file_exists($apiFile)) {
    require_once $apiFile;
    $api = new $apiClass;
    if (is_callable([$api, $action])) {
        $content = file_get_contents('php://input');
        $params = json_decode($content, true);
        $api->$action($params);
    }
}
