<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package kundensmand
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="row">
			<div class="col-sm-4 col-md-4">
				<?php dynamic_sidebar('footer-1'); ?>
			</div>
			<div class="col-sm-4 col-md-4">
				<?php dynamic_sidebar('footer-2'); ?>
			</div>
			<div class="col-sm-4 col-md-4">
				<?php dynamic_sidebar('footer-3'); ?>
			</div>
		</div>
	</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
