var avatar=""
+"                                                                      <br>"
+"         *    *    *    *   *****    *       *    ***   *****         <br>"
+"        *    *    *    *   *    *   *   *   *     *        *          <br>"
+"       ******    *    *   ****     *  * *  *     *       *            <br>"
+"      *    *    *    *   *    *   * *   * *     *      *              <br>"
+"     *    *    ******   *****    *      *     ***     *****           <br>"
+"                                                                      <br>";

avatar = avatar.replace(/\s/g,"<i>.</i>");

$(function(){
	$(".asciiart").html(avatar);
});