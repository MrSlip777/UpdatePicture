/*:
 * @plugindesc 指定した番号のピクチャをフェードインで更新するプラグイン
 * @author Slip
 * @help ピクチャ番号は以下のように指定してください。
 * 2：背景
 * 12～50：立ち絵
 * 52～99：CG
 * 
*/


function ShowFadeinPicture(pictureId,filename){
    var origin = 0;
    var scaleX = 100;
    var scaleY = 100;
    var x = 0;
    var y = 0;
    var blendMode = 0;
    var newPicName = '07_CG/' + filename;

    $gameScreen.showPicture(pictureId,newPicName, origin, x, 
        y, scaleX, scaleY,0, blendMode);
    $gameScreen.movePicture(pictureId,origin,x, 
        y, scaleX, scaleY,255,blendMode,60);
};

function UpdateFadeinPicture(pictureId,filename){

    var realPictureId = $gameScreen.realPictureId(pictureId);
    var pic = $gameScreen._pictures[realPictureId];

    if(pic != null){

        var newPicName = "";

        if(pictureId>0 && pictureId<=10){
            newPicName = "";
        }
        else if(pictureId>10 && pictureId<=50){
            newPicName = filename;
        }
        else if(pictureId>50 && pictureId<=99){
            newPicName = '07_CG/' + filename;
            pic._scaleX = 100;
            pic._scaleY = 100;
            pic._x = 0;
            pic._y = 0;
        }

        $gameScreen.showPicture(pictureId-1,pic._name, pic._origin, pic._x, 
            pic._y, pic._scaleX, pic._scaleY,pic._opacity, pic._blendMode);
        $gameScreen.showPicture(pictureId,newPicName, pic._origin, pic._x, 
            pic._y, pic._scaleX, pic._scaleY,0, pic._blendMode);
        $gameScreen.movePicture(pictureId,pic._origin,pic._x, 
            pic._y, pic._scaleX, pic._scaleY,255,pic._blendMode,60);
	$gameScreen.movePicture(pictureId-1,pic._origin,pic._x, 
            pic._y, pic._scaleX, pic._scaleY,0,pic._blendMode,60);
    }
    else{
        alert("番号："+pictureId+"にピクチャが割り当てられていません。");
    }
};

function EraceFadeoutPicture(pictureId){
    var realPictureId = $gameScreen.realPictureId(pictureId);
    var pic = $gameScreen._pictures[realPictureId];
    
    if(pic != null){    
        $gameScreen.erasePicture(pictureId-1);
        $gameScreen.movePicture(pictureId,pic._origin,pic._x, 
            pic._y, pic._scaleX, pic._scaleY,0,pic._blendMode,60);
    }
    else{
        alert("番号："+pictureId+"にピクチャが割り当てられていません。");
    }
};
